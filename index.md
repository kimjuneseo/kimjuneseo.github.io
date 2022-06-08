# 김준서

## 나이

19세

## 학교

서울디지텍고등학교

## 동아리
## 주주주주주

기능반

## 허

### 여준우

```php
<?php

function init($pages){
    [$url] = explode("?", $_SERVER['REQUEST_URI']);
    foreach($pages as $p){
        [$path, $name, $method] = explode("@", $p);
        $reg = preg_replace("/:[^\/]+/", "([^/]+)", $path);
        $reg = preg_replace("/\//", "\\/", $reg);
        $reg = "/^".$reg."$/";
        if(preg_match($reg, $url, $r)){
            $conName = "src\\Controller\\$name";
            $con = new $conName();
            $con->{$method}($r);
            exit;
        }
    }
    http_response_code(404);
}

function call($name, $args){
    if($_SERVER['REQUEST_METHOD'] == $name){
        init($args);
    }
}

$get = fn(...$args) => call("GET", $args);
$post = fn(...$args) => call("POST", $args);
```


[0608](./sdhs/0608.md)