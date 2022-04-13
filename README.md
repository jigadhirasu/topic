# topic-backend
後端程式考題
## 需求
* 實作API /battle
    * input結構
      * type: battle方式
      * playerA: 參賽者A的數值
      * playerB: 參賽者B的數值
      * 參賽者的數值結構
        * properties: 含三個數值的數列
    * output
      * 加權值
      * 隨機率
      * 勝負結果
      * 參賽者數值為負時，回傳error: Invalid value
* 實作時需考慮battle方式的擴增

資料範例
```json
{
    "type": 0,
    "playerA": {
        "properties": [
          30,
          23,
          45
        ]
    },
    "playerB": {
        "properties": [
          47,
          15,
          33
        ]
    }
}
```
