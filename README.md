# topic-backend
後端程式考題。使用zip來交付程式，只需要package-lock.json，不需要連同node_modules一同壓縮。
## 需求
### 實作Battle API
依使用端提供的資訊，計算並回傳勝負結果。
#### /battle
* Input

|key| type       | description |
|---|------------|-------------|
|type| number     | battle方式    |
|playerA| Properties | 玩家A資訊       |
|playerB| Properties | 玩家B資訊       |

Properties

| key |type| description |
|-----|---|-------------|
| -   | array |含三個數值的數列|
實例
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

* output

| key     | type   | description             |
|---------|--------|-------------------------|
| winner  | number | 0為playerA獲勝，1為playerB獲勝 |
| playerA | Result | 玩家A計算結果                 |
| playerB | Result | 玩家B計算結果                 |
| error   | string |參賽者數值為負，回傳error: Invalid value|
Result

| key     | type   | description             |
|---------|--------|-------------------------|
|weightedValue| number |參賽者各數值乘上加權後相加的結果|
|rate| number |加乘weightedValue的比例|

實例
* Success
```json
{
  "winner": 0,
  "playerA": {
    "weightedValue": 107.8,
    "rate": 0.1
  },
  "playerB": {
    "weightedValue": 142.5,
    "rate": 0.5
  }
}
```
* Error
```json
{
  "error": "Invalid value"
}
```

## 加分
* 實作時考慮battle type的擴增
* 單元測試