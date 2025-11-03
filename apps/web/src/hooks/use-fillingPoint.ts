// TODO =======埋点hooks=======
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';

interface TrackOptions {
    eventName?: string; // 默认埋点事件名
    extra?: Record<string, any>; // 额外的自定义字段
}

/**
 * ! 页面访问埋点 Hook
 */
const usePageTracking = (options?: TrackOptions) => {
    const location = useLocation();
    const enterTimeRef = useRef<number>(Date.now());
    useEffect(() => {
        // 进入页面时记录时间
        enterTimeRef.current = Date.now();
        console.groupCollapsed(`%cusePageTracking  %c页面进入埋点 ${dayjs(enterTimeRef.current).format('YYYY-MM-DD HH:mm:ss')}`,
            'color:white; background: blue; padding: 2px 6px; border-radius: 4px;font-weight: bold;margin-right:20px',
            'color: black; background: pink; padding: 2px 6px; border-radius: 4px;font-weight: bold'
        );
        console.log(`%c进入路径：`, 'color: yellow;', location.pathname);
        console.log('%c开始时间：', 'color: yellow;', dayjs(enterTimeRef.current).format('YYYY-MM-DD HH:mm:ss'));
        console.groupEnd();

        return () => {
            const leaveTime = Date.now();
            const duration = Math.floor((leaveTime - enterTimeRef.current) / 1000);
            const data = {
                event: options?.eventName || '普通事件',
                path: location.pathname,
                enterTime: dayjs(enterTimeRef.current).format('YYYY-MM-DD HH:mm:ss'),
                leaveTime: dayjs(leaveTime).format('YYYY-MM-DD HH:mm:ss'),
                duration: duration + 's',
                ...options?.extra,
            };
            console.groupCollapsed(`%cusePageTracking  %c页面离开埋点 ${dayjs(leaveTime).format('YYYY-MM-DD HH:mm:ss')}`,
                'color:white; background: blue; padding: 2px 6px; border-radius: 4px;font-weight: bold;margin-right:20px',
                'color: black; background: pink; padding: 2px 6px; border-radius: 4px;font-weight: bold'
            );
            console.log('%c事件：', 'color: yellow;', data.event);
            console.log('%c离开路径：', 'color: yellow;', data.path);
            console.log('%c开始时间：', 'color: yellow;', data.enterTime);
            console.log('%c结束时间：', 'color: yellow;', data.leaveTime);
            console.log('%c持续时间：', 'color: yellow;', data.duration);
            console.log('%c备注：', 'color: yellow;', options?.extra);
            console.groupEnd();
        };
    }, [location.pathname]);
};

/**
 * 
 * ! 事件成功埋点-当前时间点
 * @param env 事件
 */
const useLoadingComplete = (env: string) => {
    /**当前时间 */
    const date = dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    console.log(
        `%cINFO%c${env}%c${date}`,
        'color: white; background: green; padding: 2px 6px; border-radius: 4px;font-size:20px;margin-right:10px',
        'color: white; background: green; padding: 2px 6px; border-radius: 4px;font-size:20px;margin-right:10px',
        'color: white; background: green; padding: 2px 6px; border-radius: 4px;font-size:20px',
    );
}

/**
 * ! 程序初始化
 */
const useInit = () => {
    // TODO ==================================禁用浏览器debugger==================================
    function disableDebugger() {
        const obj = Object.create(null);
        // 记录当前时间
        let t = Date.now();
        //监听对象属性的获取
        Object.defineProperty(obj, 'is_debug', {
            get: () => {
                // 当对象属性的取值方法被触发时，判断时间间隔是否大于50ms,替换为空白页
                if (Date.now() - t > 50) {
                    console.clear()
                    location.replace('about:blank')
                }
            },
        });

        // 定时打印is_debug触发属性的get方法进行判断
        setInterval(() => {
            // 记录开始debugger时间
            t = Date.now();
            //触发debugger
            //通过构造函数 Function 来创建一个新的函数，这个新函数的内容是调用debugger,
            (function debug() {
            })['constructor']('debugger')();
            // 触发obj.is_debug的get方法
            console.log(obj.is_debug);
        }, 100);
    }
    disableDebugger()

    // TODO ==================================缩放禁用==================================
    const keyCodeMap: { [key: number]: boolean } = {
        // 91: true, // command
        61: true,
        107: true, // 数字键盘 +
        109: true, // 数字键盘 -
        173: true, // 火狐 - 号
        187: true, // +
        189: true, // -
    };
    // 覆盖ctrl||command + ‘+’/‘-’
    document.onkeydown = function (event) {
        const e = event || window.event;
        const ctrlKey = e.ctrlKey || e.metaKey;
        if (ctrlKey && keyCodeMap[e.keyCode]) {
            e.preventDefault();
        } else if (e.detail) {
            // Firefox
            event.returnValue = false;
        }
    };
    // 覆盖鼠标滑动
    document.body.addEventListener(
        'wheel',
        (e) => {
            if (e.ctrlKey) {
                if (e.deltaY < 0) {
                    e.preventDefault();
                    return false;
                }
                if (e.deltaY > 0) {
                    e.preventDefault();
                    return false;
                }
            }
            return false
        },
        { passive: false },
    );
    // TODO ==================================禁用F12快捷键==================================
    document.addEventListener('keydown', (e) => {
        if (e.keyCode === 123) {
            e.preventDefault();
        }
    })
    // TODO ==================================禁用右键菜单==================================
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    })
    // TODO ==================================防止网站以 iframe 方式被加载==================================
    if (window.location !== window.parent.location) window.parent.location = window.location as any;
    // TODO ==================================禁止选中文字==================================
    document.addEventListener('selectstart', (e) => {
        e.preventDefault();
    })
    /**
     * 埋点hooks描述表格
     */
    const data = [
        { name: "useInit", value: "初始化加载" },
        { name: "useLoadingComplete", value: "记录特定事件埋点" },
        { name: "usePageTracking", value: "页面访问埋点" },
        { name: "useFingerprintJS", value: "浏览器指纹" }
    ];
    /**
     * 源码地址
     */
    const github = 'https://github.com/changmen1'
    const githubProject = 'https://github.com/changmen1/zxl-blog'
    console.log(
        `%cgithub地址:${github}`,
        'color: white; background: blue; padding: 2px 6px; border-radius: 4px;font-size:20px'
    );
    console.log(
        `%c源码地址:${githubProject}`,
        'color: white; background: blue; padding: 2px 6px; border-radius: 4px;font-size:20px'
    );
    console.log(
        `%c项目埋点信息梳理`,
        'color: black; background: pink; padding: 2px 6px; border-radius: 4px;font-size:20px'
    );
    const display = data.map(item => ({ 埋点名称: item.name, 描述: item.value }));
    console.table(display);
    console.log(
        `                                                                      %c下面请欣赏小主英俊帅气的脸庞哈哈`,
        'color: black; background: pink; padding: 2px 6px; border-radius: 4px;font-size:20px'
    );
    // auther
    console.log(
        `%c
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!7?JY5PP
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!77!!~~~~~^~^~~~~~~~~~~~~~~~~~~~~~~!!7?JY5PPPPPPPPP
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!??YY5PPPPPP55J?!!~~~~~~~~~~~~~~~~!77?JY5PPPPPPPPPP555555
!!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!7?JJYY5PPGGPPP55YY5Y?777!~~~~!!7?JY5PPPPPPPP5555555YYYYYYYY
!!!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~7?JJJJJYY5PPPPP55JYJ?JYJJ?????J55PPPPPPP5555555YYYYYYYYYJJJYYJ
!!!!~~~~~~~~~~~~~~~~~~~^^^^~~~~~~~~!7?J?7777!!!7?JYY5YYJJJ???JY555YYYY555555YYYYYYYYYYYJJJJJJJJJJJJJ
!!!!~~~~~~~~~~~~~~~~^^::::::::^^~!7?J?7!!~^:::::^!!7???J??7777?JY5PGGPYYYYYYYYYYYYJJJJJJJJJJJJJJJJJJ
!!!~~~~~~~~~~~~~~^^::^~!7777!~^^?5PP5?~:.......:^^^~!!7777777!77??YPBBBPYJJJJJJJJJJJJJJJJJJJJJJJJJJJ
!!~~~~~~~~~~~~^:..:^~!777!~!777?J5PPY!:  ...:::^^^~~^~!!777777777?JYPB##GYJJJJJJJJ??JJJJJJJJJ???????
J?!!~~~~~~~~^......:::^^^~~~~~~!?5PP?^:........:::^^^~!7777777!7??JJ5B##B5JJJJJJ?????????J?????????J
?JYYJ7!!~~~:..::^^~~!7??JJJJJ??7??YP?^:.......::^^^~~~!!!!!77!!7??JJYG##B5JJJJJ?????????????????????
!!!7?YYJ7^...::^~7??JYY555555YYJYPGP!^::.:^~!!!!!!!!!!777?JY5555YJYJY5B#BY??????????????????????????
!!!!!!!!^..::~!7??JJJYYYJ7!!?JJJYPPJ~^^~!7JY5555YJJ???JJ55PP5555555YYYG#PJ????????????????????????7?
!!!!!~:..::^!7??JJYJJ?!~!77?J???J5P?^^~!!!7??JYYYYYJJJY555YYYYYY555555BBY?????77777777!!!!~~~~^^^^^?
!!!~:..:^^~7???JJYYJ!!?Y555Y?????YPYJ????7??Y5555JJ??JJY5P55555Y5555PBBY~~^^^^^^^^::::::::::::::::~Y
~^:..:^~~!7????JJYYYYY5555Y?????775GY7~!7??5PP555PY7!7JGPY5PGGPY55YJYPG?!::::::::::^^^^^^^^^^^^^::?5
.::^~~!!77?????JJJJJYPGGGY?????7JJYPJ!^^~!7J55YYJY5!^^?GYYYY55YYYJJ?J5PY5!^^^^^^^^^^^^~~^^^^^^^::~YY
^^~!!777??JJJJJJJJJYGBGPY?777777JYYYJ~:.:~7??????5J!::755JJJJJJJ????J55Y5~^^^^^^:^^^^^^^^^^^^^:::7Y?
~!!77??JJJJJJJJJJJP##GPY7777!!7~~?5??~^^^~!77777?Y~:.:~75YJ????????JYY5Y7::^^:::::^^^^^^^^^^^^::^JJ?
!!77??JJJJ????77?P##G5Y7!!!!!!~::!J7!?7!~~~!!77??~^~~!!7?Y5YJ??JJJJYYJYJ~::^^^^::::^^^~^^^^:::::!Y?7
77??JJJJ?777777?5B#G5Y7!~~~~~~::::^~~!77!!!!!777!JYJJJY5YJJJ????JJJJJJJ!^^~~~!^^^~~~~^~~^^^^^:.^JJ7!
??JJJJ?7!!!!!!7YB#P5Y7~~~~~~~:::::^~~!!!!~~!!!~!7?JJJJYYYYJ??????JJJJ?~^~!7~~~~~~~~7?77!!!!~^..!Y?!!
JJJY5J!!!!~~~!JG#PJJ7~~~~^^^^:^:::^^~!!!!!!~~~!!777?J?JYYJJJ???JJJJJJ~:::~^^^:^:^^!77!!!!!!~:.:?J!~~
JJJPJ!!~~~~~!?G#PJ?!~^^^^^^^.:::::::^!777!!!7?????JJJYYYYYYYYJJJJJJJ?::::::::::::^^~~^^^^^^:..~J7~~~
?~??!!~~~~~~?P#G?7~^^^^^^^^..........!777777JY55PPPPPPGGGPP5YJJJJJJJ~::::::::::^^^^^^^^^^^^:.:7J!~~~
:...::~~~~~7PBG5Y?~^^^^^^^........   :7????7????JJYYY55555YYJJYYJJJ!.........::::::::::::::..~J7~^^^
......~~~~75BGYJ?~^^^^^^^:...........:77?????77??JYYY5YYYJJJYYYYJ?~.........................:!J!^^^^
.....^~~~!5BPY??~^^^^^^^^::....:~!7?JY5J??????777???JJJYJJJJYYYJ~:.......:...:..............^?7~^^^^
....^~~~!YBGYJ?~^^^^^^^^^~~~!!7YPPPPB##BPJJ??J????JJYYYYYYYYYYYJ^............:..............!J!^^^^^
...^~~~!JBG5J?~^^~~~!?77!777?5BGPPB##BP555J!7JYYYY55555555YYYYYYJJJ~:......................^??~^^^^^
..^~~~!JGB5J?7~!7?J5GPYYYYJYG#BPB#&#G55P55~~7JJYYY555555YYYYYYYYYYGBPY7:...................~J!^^^^^^
.^~~~~?GG5J???JJYY5GGGPPP5P##BB#&&BP55P5P5^~7JJJYYYY5YYYYYYYYYYYY5B####PJ?!^..............:7?~^^^^^^
^~~~!7JYYJJJYY5GPPGGBGGGGB##B#&&#BP55GP55!.:~7JJJYYYYYYYYYYYYYYYPB#########GYJ?!~^::......~?!^^^^^^^
~~!???J5PY5P5PBBGBB##BGB##BB#&&#BGPPPGPPJ...:^!???JJJJJYYYYYYY5PB#############BBGP5J777!~~7?~^^^^^^^
JJYYJY5PPPGGPG#BB###BB###GB#&&#BBGGGGGPPY^.:^^^^~~!7??JJJJYYY5GB##############BBBBBGPPGPPY?!^^^^^^^^
PGGGGBBBBBGGBB##&&#B####GG#&&#BBGPBBGGPP57:::^^^::^~!7???JJYPB########&&######BBBBBBBBBBBBGY!^^^^^^^
GBBBB####&######&#B####GGB&&&#BBGGBBGPPPP57~^^^^^~~~!7?JYPG##########&&#######BBBB##BBB#BBBBGJ!~^^^^
#####&&###&&&&&##B####GGB#&&##BBGBBBGPPGGGGG5YJ????JYPGB############&&#############BB##BGGGBGGG5?~^^
#&&&&&&&&&&&&&&###&&#BGBB#&&##BGGBBGGGPGGGBB#######################&#############BBB##BBGGBBBBGGGPY~
&&&&&&&&&&&&&&&#&&&#BGGPG#&&##BGBBBBGGGGGBBB####################################BB###BBBBBBBGGBBBBGP
&&&&&&&&&&&&&&&&&&&5YJ77JP####BBBBBBBGGGBBB######&&&#######&&##################BB#&#BBBBBBBBB#BBGBBG
&&&&&&&&&&&&&&&&&&P77!!!7YB##BBBBBBBBBGGB######&&&#######&&###################BB#&#BBBBBBBB#BBGBBBGG
&&&&&&&&&&&&&&&&&G7!~~!!7YB##BB#BBBBBBBB###########&&&&&&########&##########BBB#&##BBBBBB##BBGBBBGGG
&&&&&#BGPG#&&&&&B7~^^^^:^!Y##B####BBBBBB#######&&###############&##########BBB#&##BBBBB###BBBGBBBGGG
&##G5!^::J#&&&&&Y^~^^:...:!B########BBB#######################&&#########BBBB##&##BBBB####BBBBBBBGGG
GPYJ~^^:?#&&&&&B7~~^::...:?B#################################&&########BBB#########BB#####BBBBBBBBBG
JJJ~~~~J#&&&&&&B57!!^:..:7P################################&&&#######BBB######&####B######BBBBBBBGGG
JJ!^~~J#&&&&&&##G?77?JJJ5G##################BBBBBBBB######&&&&######BB############BB#####BBBBBBBGGGG
J7^~~?B&&&&&&&##B5JYP###B################################&&&&&####BBB############BBB####BBBBBBBGGGGG
7^~~?B&&&&&&&&#######&&&#####BBBB#####&&################&&&&####BBB#############BBB#####BBBBBBBGBBBB
^~~?B&&&&&&&&####&&&&&&&####BBBBBBB####&&&###&#########&&&####BBBB##############BBB####BBBGBBBBBBBBB
!!7G&&&&&&&&&###&&&&&&&&&&##BBBBBBBBBB######################BBGBB##############BBB#####BBBGBBBBB##BB
!!P#&&&&&&&&&&&&&&&&&&&&&&&###BBBBBBBBBBB################BBBGGBB##########B#####BB#####BBGGBBBBBBBBG
!5#&&&&&&&&&&&&&&&#&&&&&&&&&####BBBBBBBBBBB##########BBBGGGGGGBB######################BBBGBBBBBBBGGG
Y##&&&&&&&&####&#######&&&&&&&###BBBBBBBBBBBBBBBBBBBBGGGGGGGGBB#######################BBGGBBBBBBGGGG
##&&&&&&&&###############&&&&&&####BBBBBBBBBBGGGGGGGGGPPGGGBBB########################BBGBBBBBBGGGGG
#&&&&&&&&&################&&&&&&&##B##BBGGGGGGGGGGGGGPPGGGBBBB#######################BBBBBBBBBGGGGGB
    `, 'font-family: monospace; font-size: 10px;color: lime; background: black;'
    )
}

export { usePageTracking, useLoadingComplete, useInit };
