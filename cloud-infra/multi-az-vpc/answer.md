# 課題 1

## プライベートサブネットとパブリックサブネットの違い

パブリックサブネットはインターネットと通じており、一般公開されるサブネット。プライベートサブネットはインターネットと通じていないサブネット。
データベースなどの一般に公開しないものはプライベートに、Web サーバなどの一般に公開するものはパブリックサブネットに配置することが多い。

## VPC にプライベートサブネットとパブリックサブネットをマルチ AZ で構成

VPC
![vpc](./screanshot/praha-vpc.png)

subnet
![subnet](./screanshot/subnet.png)

publicrouting
![publicrouting](./screanshot/public-routing.png)

private なものは上記の routing にしてない

## パブリックサブネットに SSH 可能な EC2 インスタンスを立てて、アクセス

![publicなEC2](./screanshot/public-ec2.png)

```
$ ssh -i "praha-ec2.pem" ec2-user@54.238.34.116
Warning: Permanently added '54.238.34.116' (ED25519) to the list of known hosts.

       __|  __|_  )
       _|  (     /   Amazon Linux 2 AMI
      ___|\___|___|

https://aws.amazon.com/amazon-linux-2/
```

![publicとprivateなEC2](./screanshot/publicprivate-ec2.png)

## プライベートサブネットにも EC2 インスタンスを立てて、パブリックサブネットの EC2 インスタンスからのみプライベートサブネットの EC ２インスタンスに SSH でアクセス可能にする

```
[ec2-user@ip-10-0-0-204 ~]$ ssh -i "praha-ec2.pem" ec2-user@10.0.2.239
Last login: Sat Jul  9 09:30:47 2022 from 10.0.0.204

       __|  __|_  )
       _|  (     /   Amazon Linux 2 AMI
      ___|\___|___|

https://aws.amazon.com/amazon-linux-2/
[ec2-user@ip-10-0-2-239 ~]$
```

## プライベートサブネットに VPC の外からはアクセスできない確認

```
$ ssh -i "praha-ec2.pem" ec2-user@13.113.194.177
```

のまま止まり、private なインスタンスには接続できない
