package com.dfire.common.constants;

/**
 * @author xiaosuda
 * @date 2018/7/2
 */
public class Constants {

    public final static String HERA_GROUP = "heraGroup";

    public final static String GROUP_PREFIX = "group_";

    public final static String PRE_ENV = "pre";

    public final static String PUB_ENV = "publish";

    public final static String WORK_PREFIX = "worker-";

    public final static String MASTER_PREFIX = "master-";


    public final static String STATUS_FAILED = "failed";

    public final static String STATUS_RUNNING = "running";

    public final static String STATUS_SUCCESS = "success";
    public final static String HTML_FONT_RED_LEFT = "<font color=\"red\">";

    public final static String HTML_FONT_GREEN_LEFT = "<font color=\"green\">";

    public final static String HTML_FONT_YELLOW_LEFT = "<font color=\"yellow\">";

    public final static String HTML_FONT_RIGHT = "</font>";


    public final static String STATUS_WAIT = "wait";

    public final static String LEFT_BRACKET = "(";

    public final static String RIGHT_BRACKET = ")";

    public final static String ALL_JOB_ID = "-1024";

    public final static String CANCEL_JOB_MESSAGE = "任务手动取消";

    /**
     * jwt  过期时间 单位 天
     */
    public final static Integer JWT_TIME_OUT = 3;
    /**
     * cookie过期时间 单位 秒
     */
    public final static Integer LOGIN_TIME_OUT = JWT_TIME_OUT * 60 * 60 * 24;

    public final static Integer DEFAULT_EXIT_CODE = 1024;

    public final static Integer LOG_EXIT_CODE = 1025;

    public final static Integer INTERRUPTED_EXIT_CODE = 1026;


    public final static String SPARK_FILE = "spark";

    public final static String HIVE_FILE = "hive";

    public final static String SHELL_FILE = "shell";


    public final static String POINT = ".";

    public final static String COMMA = ",";


    public final static String SHELL_SUFFIX = POINT + "sh";

    public final static String HIVE_SUFFIX = POINT + HIVE_FILE;

    public final static String SPARK_SUFFIX = POINT + SPARK_FILE;

    public final static String NEW_LINE = "\n";
    public final static String HTML_NEW_LINE = "<br>";


}
