var msgHeight;

function successMsg(data) {
    if (window.screen.width <= 767) {
        msgHeight = 100;
    } else {
        msgHeight = 50;
    }
    if (data.success == true) {
        success(data.message);
        $("#table").bootstrapTable("refresh");
    } else {
        failure(data.message);
    }

}

function success(msg) {
    $('#alertSuccess').css({
        "width": 700,
        "right": ($(window).width() - 700) / 2,
        "display": "block"
    });
    $('#alertSuccess #successText').text(msg);
    $('#alertSuccess').animate({
        top: msgHeight
    }, 2000);
    $('#alertSuccess').animate({
        top: 0
    }, 2000, "linear", function () {
        $('#alertSuccess').css("display", "none");
    });
}

function failure(msg) {

    $('#alertFailure').css({
        "width": 500,
        "right": ($(window).width() - 500) / 2,
        "display": "block"
    });
    $('#alertFailure #failureText').text(msg);
    $('#alertFailure').animate({
        top: msgHeight
    }, 2000);
    $('#alertFailure').animate({
        top: 0
    }, 2000, "linear", function () {
        $('#alertFailure').css("display", "none");
    });
}

function dealCode(data) {
    if (data.code == 401) {
        location.href = "/";
    } else {
        alert("错误代码：" + data.code);
    }
}

function formDataLoad(domId, obj) {

    $("#" + domId)[0].reset();
    for (var property in obj) {
        if (obj.hasOwnProperty(property) == true) {
            if ($("#" + domId + " [name='" + property + "']").size() > 0) {
                $("#" + domId + " [name='" + property + "']").each(function () {
                    var dom = this;
                    if ($(dom).attr("type") == "radio") {
                        $(dom).filter("[value='" + obj[property] + "']").attr("checked", true);
                    }
                    else if ($(dom).attr("type") == "checkbox") {
                        obj[property] == true ? $(dom).attr("checked", "checked") : $(dom).attr("checked", "checked").removeAttr("checked");
                    }
                    else if ($(dom).attr("type") == "text" || $(dom).prop("tagName") == "SELECT" || $(dom).attr("type") == "hidden" || $(dom).attr("type") == "textarea") {
                        if (obj[property] == null || obj[property] == undefined) {
                            $("dom option:first").attr("selected", true)
                        } else {
                            $(dom).val(obj[property]);
                        }
                    }
                    else if ($(dom).prop("tagName") == "TEXTAREA") {
                        $(dom).val(obj[property]);
                    } else {
                        $(dom).val(obj[property]);
                        $(dom).text(obj[property]);
                    }
                });
            }
        }
    }
}


/**
 * 判断value是否已经存在arr数据中
 *
 * @param arr
 * @param value
 * @returns {boolean}
 */
function isInArray(arr, value) {
    var b = false;
    if (arr == null) {
        return b;
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]['id'] == value['id']) {
            b = true;
            break;
        }
    }
    return b;
}

/**
 * 以post方式请求数据
 *
 * @param url
 * @returns {*}
 */

function getDataByPost(url) {
    var dataStore;
    $.ajax({
        type: "post",
        url: url,
        async: false,
        success: function (data) {
            dataStore = data;
        }
    });
    return dataStore;
}

/**
 * 以get方式获取数据
 * @param url
 * @param parameter
 * @returns {*}
 */
function getDataByGet(url, parameter) {
    var result = '';
    $.ajax({
        url: url,
        type: "get",
        async: false,
        data: parameter,
        success: function (data) {
            result = data;
        }
    });
    return result;
}

/**
 * 格式化日期
 * @param timestamp
 * @returns {string}
 */
function getLocalTime(timestamp) {
    var date = new Date(timestamp);
    var newDate = date.toLocaleDateString().replace(/\//g, "-") + " " + date.toTimeString().substr(0, 8);
    return newDate;
}

/**
 * 根据id设置代码区值
 * @param id
 */

function setScript(id) {
    var parameter = "id=" + id;
    var url = base_url + "/developCenter/find.do";
    var result = getDataByGet(url, parameter)
    var script = result['content'];
    if (script == null || script == '') {
        script = '';
    }
    $("#fileScript").text(script);
}
