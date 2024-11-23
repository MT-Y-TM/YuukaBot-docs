# Wordle猜单词

## 概述

Wordle是一个猜单词游戏，玩家需要在6次猜测内猜出一个n个字母的单词。

每次猜测后，bot会给出反馈，其中绿色表示字母正确且位置正确，黄色表示字母正确但位置错误，灰色表示字母不在单词中。

一个字母的黄色和绿色数量与答案中的数量保持一致。

以输入apple，答案adapt为例，结果为apple的第一个p是黄色，第二个p是灰色，代表答案中只有一个p，且不在第二个位置。

## 指令

### 猜单词

- 指令： `/猜单词 [单词长度] [单词列表]`

- 参数：

  - `单词长度`：单词长度，范围为3-8，默认为5
  - `单词列表`：单词列表，可用的有 `考研`、`专八`、`专四`、`CET4`、`CET6`、`GMAT`、`IELTS`、`SAT`、`TOEFL`

- 详情：

  开始一局Wordle游戏

### 提示猜单词

- 指令： `/提示猜单词`

- 详情：

  获取当前Wordle游戏的答案

### 结束猜单词

- 指令： `/结束猜单词`

- 详情：

  结束当前Wordle游戏

### 我猜单词是

- 指令： `/我猜单词是 [单词]`

- 参数：

  - `单词`：猜测的单词

- 详情：

  猜测单词，获取反馈

### 使用猜单词帮助

- 指令： `/使用猜单词帮助`

- 详情：

  获取Wordle游戏的帮助信息