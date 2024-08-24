import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,b as e}from"./app-CtbYvwav.js";const i={},l=e(`<ul><li><strong>docker hub 官方地址：**</strong><a href="https://hub.docker.com" target="_blank" rel="noopener noreferrer">https://hub.docker.com</a>**</li></ul><h2 id="一、mysql" tabindex="-1"><a class="header-anchor" href="#一、mysql"><span>一、Mysql</span></a></h2><h3 id="单机模式" tabindex="-1"><a class="header-anchor" href="#单机模式"><span>单机模式</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 拉取mysql镜像</span></span>
<span class="line"><span>docker pull mysql:5.7</span></span>
<span class="line"><span># 查看下载好的镜像</span></span>
<span class="line"><span>docker images</span></span>
<span class="line"><span># 运行</span></span>
<span class="line"><span>docker run -p 3306:3306 --name mysql --restart=always --privileged=true \\</span></span>
<span class="line"><span>-v /Users/young/workspace/docker/mysql/log:/var/log/mysql \\</span></span>
<span class="line"><span>-v /Users/young/workspace/docker/mysql/data:/var/lib/mysql \\</span></span>
<span class="line"><span>-v /Users/young/workspace/docker/mysql/conf:/etc/mysql/conf.d \\</span></span>
<span class="line"><span>-v /etc/localtime:/etc/localtime:ro \\</span></span>
<span class="line"><span>-e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看运行中的容器</span></span>
<span class="line"><span>docker ps</span></span>
<span class="line"><span># 查看docker日志</span></span>
<span class="line"><span>docker logs -f mysql</span></span>
<span class="line"><span># 进入容器</span></span>
<span class="line"><span>docker exec -it mysql /bin/bash</span></span>
<span class="line"><span># 链接mysql</span></span>
<span class="line"><span>mysql -u root -p</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集群模式" tabindex="-1"><a class="header-anchor" href="#集群模式"><span>集群模式</span></a></h3><ul><li><strong>Master 服务器</strong></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 创建网络</span></span>
<span class="line"><span>docker network create mysql-net</span></span>
<span class="line"><span># 运行 -- master</span></span>
<span class="line"><span>docker run -p 3307:3306 --net mysql-net --name mysql_master --restart=always --privileged=true \\</span></span>
<span class="line"><span>-v /Users/young/workspace/docker/mysql_master/log:/var/log/mysql \\</span></span>
<span class="line"><span>-v /Users/young/workspace/docker/mysql_master/data:/var/lib/mysql \\</span></span>
<span class="line"><span>-v /Users/young/workspace/docker/mysql_master/conf:/etc/mysql/conf.d \\</span></span>
<span class="line"><span>-v /etc/localtime:/etc/localtime:ro \\</span></span>
<span class="line"><span>-e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7</span></span>
<span class="line"><span># 创建my.cnf</span></span>
<span class="line"><span>[client]</span></span>
<span class="line"><span>default_character_set=utf8</span></span>
<span class="line"><span>[mysql]</span></span>
<span class="line"><span>default_character_set=utf8</span></span>
<span class="line"><span>[mysqld]</span></span>
<span class="line"><span>character_set_server=utf8</span></span>
<span class="line"><span>server_id=1</span></span>
<span class="line"><span>binlog-ignore-db=mysql</span></span>
<span class="line"><span>log-bin=master-log-bin</span></span>
<span class="line"><span>binlog_cache_size=1M</span></span>
<span class="line"><span>binlog_format=mixed</span></span>
<span class="line"><span>slave_skip_errors=1062</span></span>
<span class="line"><span># 重启</span></span>
<span class="line"><span>docker restart mysql_master</span></span>
<span class="line"><span># 进入容器</span></span>
<span class="line"><span>docker exec -it mysql_master /bin/bash</span></span>
<span class="line"><span># 链接mysql</span></span>
<span class="line"><span>mysql -u root -p</span></span>
<span class="line"><span># 创建用户名和密码</span></span>
<span class="line"><span>mysql&gt; create user &#39;slave&#39;@&#39;%&#39; identified by &#39;123456&#39;;</span></span>
<span class="line"><span># 授权</span></span>
<span class="line"><span>mysql&gt; grant replication slave,replication client on *.* to &#39;slave&#39;@&#39;%&#39;;</span></span>
<span class="line"><span># 查看二进制日志名称以及开始的位置</span></span>
<span class="line"><span>mysql&gt; show master status;</span></span>
<span class="line"><span>+-----------------------+----------+--------------+------------------+-------------------+</span></span>
<span class="line"><span>| File                  | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |</span></span>
<span class="line"><span>+-----------------------+----------+--------------+------------------+-------------------+</span></span>
<span class="line"><span>| master-log-bin.000004 |      769 |              | mysql            |                   |</span></span>
<span class="line"><span>+-----------------------+----------+--------------+------------------+-------------------+</span></span>
<span class="line"><span>1 row in set (0.01 sec)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Slave 服务器</strong></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 运行 -- slave</span></span>
<span class="line"><span>docker run -p 3308:3306 --net mysql-net --name  mysql_slave --restart=always --privileged=true \\</span></span>
<span class="line"><span>-v /Users/young/workspace/docker/mysql_slave/log:/var/log/mysql \\</span></span>
<span class="line"><span>-v /Users/young/workspace/docker/mysql_slave/data:/var/lib/mysql \\</span></span>
<span class="line"><span>-v /Users/young/workspace/docker/mysql_slave/conf:/etc/mysql/conf.d \\</span></span>
<span class="line"><span>-v /etc/localtime:/etc/localtime:ro \\</span></span>
<span class="line"><span>-e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7</span></span>
<span class="line"><span># 创建my.cnf</span></span>
<span class="line"><span>[client]</span></span>
<span class="line"><span>default_character_set=utf8</span></span>
<span class="line"><span>[mysql]</span></span>
<span class="line"><span>default_character_set=utf8</span></span>
<span class="line"><span>[mysqld]</span></span>
<span class="line"><span>character_set_server=utf8</span></span>
<span class="line"><span>server_id=2</span></span>
<span class="line"><span>binlog-ignore-db=mysql</span></span>
<span class="line"><span>log-bin=slave-log-bin</span></span>
<span class="line"><span>binlog_cache_size=1M</span></span>
<span class="line"><span>binlog_format=mixed</span></span>
<span class="line"><span>slave_skip_errors=1062</span></span>
<span class="line"><span>relay_log=relay-log-bin</span></span>
<span class="line"><span>log_slave_updates=1</span></span>
<span class="line"><span>read_only=1</span></span>
<span class="line"><span># 重启</span></span>
<span class="line"><span>docker restart mysql_slave</span></span>
<span class="line"><span># 进入容器</span></span>
<span class="line"><span>docker exec -it mysql_slave /bin/bash</span></span>
<span class="line"><span># 链接mysql</span></span>
<span class="line"><span>mysql -u root -p</span></span>
<span class="line"><span># 链接master</span></span>
<span class="line"><span>mysql&gt; change master to master_host=&#39;172.20.0.2&#39;,</span></span>
<span class="line"><span>master_user=&#39;slave&#39;,</span></span>
<span class="line"><span>master_password=&#39;123456&#39;,</span></span>
<span class="line"><span>master_port=3306,</span></span>
<span class="line"><span>master_log_file=&#39;master-log-bin.000015&#39;,</span></span>
<span class="line"><span>master_log_pos=154;</span></span>
<span class="line"><span># 开启同步</span></span>
<span class="line"><span>mysql&gt; start slave;</span></span>
<span class="line"><span># 查看slave的状态</span></span>
<span class="line"><span>mysql&gt; show slave status\\G;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意事项：IP、文件、重启、error 文件</strong></p><h2 id="二、redis" tabindex="-1"><a class="header-anchor" href="#二、redis"><span>二、Redis</span></a></h2><h3 id="单机模式-1" tabindex="-1"><a class="header-anchor" href="#单机模式-1"><span>单机模式</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 拉取镜像</span></span>
<span class="line"><span>docker pull redis</span></span>
<span class="line"><span># 创建本地redis.conf</span></span>
<span class="line"><span>默认配置: https://github.com/redis/redis/blob/unstable/redis.conf</span></span>
<span class="line"><span># 修改redis.conf配置</span></span>
<span class="line"><span>注释掉该行 # bind 127.0.0.1 -::1</span></span>
<span class="line"><span>注释掉该行 # protected-mode yes</span></span>
<span class="line"><span>修改改行 dir /data</span></span>
<span class="line"><span># 启动容器</span></span>
<span class="line"><span>docker run -itd  --name  redis --restart=always -v /Users/young/workspace/docker/redis/conf/redis.conf:/etc/redis/redis.conf -v /Users/young/workspace/docker/redis/data:/data   -p 6379:6379 -p 6379   redis redis-server /etc/redis/redis.conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集群模式-1" tabindex="-1"><a class="header-anchor" href="#集群模式-1"><span>集群模式</span></a></h3><p><strong>备注：Mac docker redis 集群通信问题没搞定。</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo docker network ls --filter driver=bridge --format &quot;{{.ID}}&quot; | xargs docker network inspect --format &quot;route {{range .IPAM.Config}}{{.Subnet}}{{end}}&quot; &gt;&gt; /usr/local/etc/docker-connector.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span># redis.conf 需要在每个配置文件加上对应的外网ip和端口号</span></span>
<span class="line"><span>port 7006</span></span>
<span class="line"><span>bind 0.0.0.0</span></span>
<span class="line"><span>cluster-enabled yes</span></span>
<span class="line"><span>protected-mode no</span></span>
<span class="line"><span>cluster-config-file nodes.conf</span></span>
<span class="line"><span>cluster-node-timeout 5000</span></span>
<span class="line"><span>cluster-announce-ip 192.168.51.3</span></span>
<span class="line"><span>cluster-announce-port 7006</span></span>
<span class="line"><span>cluster-announce-bus-port 17006</span></span>
<span class="line"><span>appendonly yes</span></span>
<span class="line"><span># 创建docker网络</span></span>
<span class="line"><span>docker network create redis-net</span></span>
<span class="line"><span>docker network create --driver bridge --subnet 172.16.0.0/16 --gateway 172.16.0.1 redis-net</span></span>
<span class="line"><span># 运行容器</span></span>
<span class="line"><span>docker run -d --name redis1 -v /Users/young/workspace/docker/redis_1/conf/redis.conf:/etc/redis/redis.conf -v /Users/young/workspace/docker/redis_1/data:/data --restart=always --network redis-net -p 7001:7001 -p 17001:17001 redis redis-server --port 7001 --cluster-enabled yes --cluster-config-file nodes.conf --cluster-node-timeout 5000 --appendonly yes</span></span>
<span class="line"><span>docker run -d --name redis2 -v /Users/young/workspace/docker/redis_2/conf/redis.conf:/etc/redis/redis.conf -v /Users/young/workspace/docker/redis_2/data:/data --restart=always --network redis-net -p 7002:7002 -p 17002:17002 redis redis-server --port 7002 --cluster-enabled yes --cluster-config-file nodes.conf --cluster-node-timeout 5000 --appendonly yes</span></span>
<span class="line"><span>docker run -d --name redis3 -v /Users/young/workspace/docker/redis_3/conf/redis.conf:/etc/redis/redis.conf -v /Users/young/workspace/docker/redis_3/data:/data --restart=always --network redis-net -p 7003:7003 -p 17003:17003 redis redis-server --port 7003 --cluster-enabled yes --cluster-config-file nodes.conf --cluster-node-timeout 5000 --appendonly yes</span></span>
<span class="line"><span>docker run -d --name redis4 -v /Users/young/workspace/docker/redis_4/conf/redis.conf:/etc/redis/redis.conf -v /Users/young/workspace/docker/redis_4/data:/data --restart=always --network redis-net -p 7004:7004 -p 17004:17004 redis redis-server --port 7004 --cluster-enabled yes --cluster-config-file nodes.conf --cluster-node-timeout 5000 --appendonly yes</span></span>
<span class="line"><span>docker run -d --name redis5 -v /Users/young/workspace/docker/redis_5/conf/redis.conf:/etc/redis/redis.conf -v /Users/young/workspace/docker/redis_5/data:/data --restart=always --network redis-net -p 7005:7005 -p 17005:17005 redis redis-server --port 7005 --cluster-enabled yes --cluster-config-file nodes.conf --cluster-node-timeout 5000 --appendonly yes</span></span>
<span class="line"><span>docker run -d --name redis6 -v /Users/young/workspace/docker/redis_6/conf/redis.conf:/etc/redis/redis.conf -v /Users/young/workspace/docker/redis_6/data:/data --restart=always --network redis-net -p 7006:7006 -p 17006:17006 redis redis-server --port 7006 --cluster-enabled yes --cluster-config-file nodes.conf --cluster-node-timeout 5000 --appendonly yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看容器ip</span></span>
<span class="line"><span>docker inspect redis1</span></span>
<span class="line"><span># 设置集群</span></span>
<span class="line"><span>docker exec -it redis1 redis-cli --cluster create 172.19.0.2:6379 172.19.0.3:6379 172.19.0.4:6379 172.19.0.5:6379 172.19.0.6:6379 172.19.0.7:6379 --cluster-replicas 1</span></span>
<span class="line"><span>docker exec -it redis1 redis-cli --cluster create 192.168.51.3:7001 192.168.51.3:7002 192.168.51.3:7003 192.168.51.3:7004 192.168.51.3:7005 192.168.51.3:7006 --cluster-replicas 1</span></span>
<span class="line"><span># 验证成功</span></span>
<span class="line"><span>docker exec -it redis1 redis-cli cluster nodes</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、nacos" tabindex="-1"><a class="header-anchor" href="#三、nacos"><span>三、Nacos</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 拉取镜像</span></span>
<span class="line"><span>docker pull nacos/nacos-server:v2.3.2-slim (mac)</span></span>
<span class="line"><span># 运行容器</span></span>
<span class="line"><span>docker run  --env MODE=standalone --restart=always --name nacos -p 8848:8848 -p 9848:9848 -p 9849:9849 -v /Users/young/workspace/docker/nacos/logs:/home/nacos/logs -v /Users/young/workspace/docker/nacos/data:/home/nacos/data -v /Users/young/workspace/docker/nacos/conf/application.properties:/home/nacos/conf/application.properties -e alibaba.nacos.naming.log.level=error -e alibaba.nacos.config.log.level=warn -e NACOS_LOG_LEVEL=info -d nacos/nacos-server:v2.3.2-slim</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#访问</span></span>
<span class="line"><span>http://localhost:8848/nacos</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、rabbitmq" tabindex="-1"><a class="header-anchor" href="#四、rabbitmq"><span>四、Rabbitmq</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 拉取镜像</span></span>
<span class="line"><span>docker pull rabbitmq</span></span>
<span class="line"><span># 运行容器</span></span>
<span class="line"><span>docker run --name rabbitmq --restart=always -p 5672:5672 -p 15672:15672 -d rabbitmq:management</span></span>
<span class="line"><span># 访问</span></span>
<span class="line"><span>http://localhost:15672  </span></span>
<span class="line"><span># 默认账号</span></span>
<span class="line"><span>username:guest</span></span>
<span class="line"><span>password:guest</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、mongodb" tabindex="-1"><a class="header-anchor" href="#五、mongodb"><span>五、MongoDB</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 拉取镜像</span></span>
<span class="line"><span>docker pull mongo</span></span>
<span class="line"><span># 运行容器</span></span>
<span class="line"><span>docker run -d \\</span></span>
<span class="line"><span>  --name mongodb \\</span></span>
<span class="line"><span>  -e MONGO_INITDB_ROOT_USERNAME=root \\</span></span>
<span class="line"><span>  -e MONGO_INITDB_ROOT_PASSWORD=root \\</span></span>
<span class="line"><span>  -e MONGO_INITDB_DATABASE=ChatLogHistory \\</span></span>
<span class="line"><span>  -p 27017:27017 \\</span></span>
<span class="line"><span>  mongo</span></span>
<span class="line"><span># 进入容器</span></span>
<span class="line"><span>docker exec -it mongodb bash</span></span>
<span class="line"><span># 安装vim</span></span>
<span class="line"><span>apt-get update &amp;&amp; apt-get install -y vim</span></span>
<span class="line"><span># 修改配置</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 访问</span></span>
<span class="line"><span>http://localhost:27017</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 默认账号</span></span>
<span class="line"><span>username:root</span></span>
<span class="line"><span>password:root</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结尾：后续会陆续根据项目需要更新</strong></p>`,23),p=[l];function r(d,c){return a(),n("div",null,p)}const v=s(i,[["render",r],["__file","20240813086297172.html.vue"]]),m=JSON.parse('{"path":"/docker/20240813086297172.html","title":"Docker安装相关组件","lang":"zh-CN","frontmatter":{"title":"Docker安装相关组件","category":["docker"],"date":"2024-05-15T00:00:00.000Z","tag":["运维"],"description":"docker hub 官方地址：**https://hub.docker.com** 一、Mysql 单机模式 集群模式 Master 服务器 Slave 服务器 注意事项：IP、文件、重启、error 文件 二、Redis 单机模式 集群模式 备注：Mac docker redis 集群通信问题没搞定。 三、Nacos 四、Rabbitmq 五、Mo...","head":[["meta",{"property":"og:url","content":"https://github.com/youngerhe/docker/20240813086297172.html"}],["meta",{"property":"og:site_name","content":"木锤"}],["meta",{"property":"og:title","content":"Docker安装相关组件"}],["meta",{"property":"og:description","content":"docker hub 官方地址：**https://hub.docker.com** 一、Mysql 单机模式 集群模式 Master 服务器 Slave 服务器 注意事项：IP、文件、重启、error 文件 二、Redis 单机模式 集群模式 备注：Mac docker redis 集群通信问题没搞定。 三、Nacos 四、Rabbitmq 五、Mo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-24T03:43:57.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:tag","content":"运维"}],["meta",{"property":"article:published_time","content":"2024-05-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-24T03:43:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker安装相关组件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-24T03:43:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"/about/intro.html\\"}]}"]]},"headers":[{"level":2,"title":"一、Mysql","slug":"一、mysql","link":"#一、mysql","children":[{"level":3,"title":"单机模式","slug":"单机模式","link":"#单机模式","children":[]},{"level":3,"title":"集群模式","slug":"集群模式","link":"#集群模式","children":[]}]},{"level":2,"title":"二、Redis","slug":"二、redis","link":"#二、redis","children":[{"level":3,"title":"单机模式","slug":"单机模式-1","link":"#单机模式-1","children":[]},{"level":3,"title":"集群模式","slug":"集群模式-1","link":"#集群模式-1","children":[]}]},{"level":2,"title":"三、Nacos","slug":"三、nacos","link":"#三、nacos","children":[]},{"level":2,"title":"四、Rabbitmq","slug":"四、rabbitmq","link":"#四、rabbitmq","children":[]},{"level":2,"title":"五、MongoDB","slug":"五、mongodb","link":"#五、mongodb","children":[]}],"git":{"createdTime":1724471037000,"updatedTime":1724471037000,"contributors":[{"name":"perkins","email":"mbitchina@163.com","commits":1}]},"readingTime":{"minutes":3.76,"words":1129},"filePathRelative":"docker/20240813086297172.md","localizedDate":"2024年5月15日","excerpt":"<ul>\\n<li><strong>docker hub 官方地址：**</strong><a href=\\"https://hub.docker.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://hub.docker.com</a>**</li>\\n</ul>\\n<h2>一、Mysql</h2>\\n<h3>单机模式</h3>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span># 拉取mysql镜像</span></span>\\n<span class=\\"line\\"><span>docker pull mysql:5.7</span></span>\\n<span class=\\"line\\"><span># 查看下载好的镜像</span></span>\\n<span class=\\"line\\"><span>docker images</span></span>\\n<span class=\\"line\\"><span># 运行</span></span>\\n<span class=\\"line\\"><span>docker run -p 3306:3306 --name mysql --restart=always --privileged=true \\\\</span></span>\\n<span class=\\"line\\"><span>-v /Users/young/workspace/docker/mysql/log:/var/log/mysql \\\\</span></span>\\n<span class=\\"line\\"><span>-v /Users/young/workspace/docker/mysql/data:/var/lib/mysql \\\\</span></span>\\n<span class=\\"line\\"><span>-v /Users/young/workspace/docker/mysql/conf:/etc/mysql/conf.d \\\\</span></span>\\n<span class=\\"line\\"><span>-v /etc/localtime:/etc/localtime:ro \\\\</span></span>\\n<span class=\\"line\\"><span>-e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span># 查看运行中的容器</span></span>\\n<span class=\\"line\\"><span>docker ps</span></span>\\n<span class=\\"line\\"><span># 查看docker日志</span></span>\\n<span class=\\"line\\"><span>docker logs -f mysql</span></span>\\n<span class=\\"line\\"><span># 进入容器</span></span>\\n<span class=\\"line\\"><span>docker exec -it mysql /bin/bash</span></span>\\n<span class=\\"line\\"><span># 链接mysql</span></span>\\n<span class=\\"line\\"><span>mysql -u root -p</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{v as comp,m as data};
