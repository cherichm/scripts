# 大大鸣版 快手
# 有问题请及时联系大大鸣 v:xolag29638099  （有其他想要的脚本也可以联系，尽量试着写一写）
# 环境变量 yymks  抓取 cookie&sig3
# 多账号 使用#   例如：账号1#账号2
#
#
#   --------------------------------祈求区--------------------------------
#                     _ooOoo_
#                    o8888888o
#                    88" . "88
#                    (| -_- |)
#                     O\ = /O
#                 ____/`---'\____
#               .   ' \\| |// `.
#                / \\||| : |||// \
#              / _||||| -:- |||||- \
#                | | \\\ - /// | |
#              | \_| ''\---/'' | |
#               \ .-\__ `-` ___/-. /
#            ___`. .' /--.--\ `. . __
#         ."" '< `.___\_<|>_/___.' >'"".
#        | | : `- \`.;`\ _ /`;.`/ - ` : | |
#          \ \ `-. \_ __\ /__ _/ .-` / /
#  ======`-.____`-.___\_____/___.-`____.-'======
#                     `=---='
#
#  .............................................
#           佛祖保佑             永无BUG
#           佛祖镇楼             BUG辟邪
#   --------------------------------代码区--------------------------------
import zlib, base64, marshal

exec(
    marshal.loads(
        zlib.decompress(
            base64.b64decode(
                b"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"
            )
        )
    )
)
