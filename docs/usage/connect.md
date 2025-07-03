# 物联服务的连接

## 本地服务模式（局域网）

<p class="attention">注意：注册本地许可客户端 和 创建本地服务项目 为两种适用于不同场景的连接服务形式，并无关联！</p>

### 注册本地许可客户端

您可以通过`本地客户端管理界面`，注册本地服务许可接入的客户端。其中，客户端名称仅作标识说明，不参与连接时的验证。此场景下注册的客户端信息，多用作同一局域网中的其他设备(如esp32、esp8266、外接网络模块的arduino等)的接入信息。

<video src="/images/aguato_esp32_test.mp4" controls></video>

以esp32为例，固件烧录版本为micropython (视频中IDE为vscode, 插件RT-Thread MicroPython)
```python
""" ESP32 MQTT Example
连接本地局域网物联服务端，客户端填入信息为用户自行在软件中注册的许可客户端信息
功能：wifi, mqtt连接成功后，每3秒发布一次消息到MQTT服务器；消息内容为"Hello from ESP32"和一个计数器
"""

import network
import time
from umqtt.simple import MQTTClient

# 自行修改 WiFi 和 MQTT 的配置信息
WIFI_SSID = "your_wifi_ssid"
WIFI_PASSWORD = "your_wifi_pwd"

MQTT_BROKER = "192.168.0.101" # 填写实际本地物联服务IP
MQTT_PORT = 1883
MQTT_CLIENT_ID = "clientA" # 已注册的客户端ID
MQTT_CLIENT_PWD = "pwd" # 对应密码
MQTT_TOPIC1 = "test/esp32"
MQTT_TOPIC2 = "test/esp32/count"

count = 0

# 连接 WiFi
def connect_wifi():
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    wlan.connect(WIFI_SSID, WIFI_PASSWORD)
    
    while not wlan.isconnected():
        time.sleep(0.5)
        print("Connecting to WiFi...")
    
    print("Connected to WiFi:", wlan.ifconfig())

# 连接到 MQTT 服务器
def connect_mqtt():
    try:
        client = MQTTClient(MQTT_CLIENT_ID, MQTT_BROKER, port=MQTT_PORT, user=MQTT_CLIENT_ID, password=MQTT_CLIENT_PWD)
        client.connect()
        print("Connected to MQTT Broker")
        return client
    except Exception as e:
        print("Failed to connect to MQTT Broker:", str(e))
        return None

# 发布消息
def publish_mqtt(client):
    global count
    message = "Hello from ESP32"
    client.publish(MQTT_TOPIC1, message)
    client.publish(MQTT_TOPIC2, str(count))
    count += 1
    print("publishing..." + str(count))

# 连接 WiFi
connect_wifi()
# 连接 MQTT 服务器
client = connect_mqtt()
# 如果连接成功，发布消息
while client:
    # 发布消息
    publish_mqtt(client)    
    # 等待一段时间再发布下一条消息
    time.sleep(3)
```

<br>

### 创建本地服务项目

您还可以通过`项目管理界面`创建本地服务项目，此时不创建任何客户端，发布/订阅行为均由本地服务端直接操作，所以本地模式下的项目无需进行连接操作，创建即连接（除非本地物联服务端启动异常）；此时，由于是服务端直接处理信息，订阅操作也不区分QOS等级。

<img src="/images/Snipaste_2025-07-01_20-12-01.png">

编辑已有项目，可单击⚙图标或双击项目列表中对应名称打开编辑框。

<img src="/images/ezgif-70c10b669bfc26.gif">


<br><br><br>

## 远程服务模式

### 创建远程服务项目

您可以通过`项目管理界面`创建远程服务项目，填入您外部物联服务端接入时所需的相关信息，创建客户端；点击连接图标，进行连接操作。

*注意：如使用公共免费MQTT服务，请确保输入客户端ID的唯一性*

<img src="/images/Snipaste_2025-07-01_20-13-25.png">

<img src="/images/ezgif-736aa6201760df.gif">


<style lang="scss" scoped>
  video {
    max-width: 800px;
  }
  @media (max-width: 1200px) {
    video {
      max-width: calc(100vw - 350px);
    }
  }
  @media (max-width: 719px) {
    video {
      max-width: calc(100vw - 50px);
    }
  }
</style>