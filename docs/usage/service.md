# 物联服务的建立

您可以选择本地或远程物联服务来使用软件。

## 本地物联服务（局域网）

软件开启后，**会自动建立本地物联服务端**，默认端口1883；IPv4地址为当前局域网分配地址，可通过常见的命令行脚本`ipconfig`进行查询，也可以直接在`本地客户端管理`界面如图所示位置获知。

<img src="/images/Snipaste_2025-07-01_19-39-20.png">

<br>
<br>

<img src="/images/Snipaste_2025-07-01_20-08-48.png">


> 关于局域网的建立：在未接入外部互联网的情况下，您可以使用路由器或者将具有无线网卡的PC开启热点模式，以建立局域网

## 远程物联服务

### 公共免费的MQTT服务

1. `broker.emqx.io:1883` 官网：<a href="https://github.com/emqx/emqx">EMQX</a>

2. `test.mosquitto.org:1883` 官网: <a href="https://test.mosquitto.org/">Eclipse Mosquitto Public Test MQTT Broker</a>

2. `broker.hivemq.com:1883` 官网： <a href="https://www.hivemq.com/mqtt/public-mqtt-broker/">HiveMQ Public Broker</a>

### 各平台付费云服务方案

1. <a href="https://console.cloud.tencent.com/iotexplorer/v2">腾讯云物联网开发平台</a>

2. <a href="https://iot.aliyun.com/">阿里云IoT</a>