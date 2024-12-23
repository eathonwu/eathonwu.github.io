---
title: 'golang常见坑'
---

2024 -11- 17 

https://geektutu.com/post/hpg-string-concat.html  

题目汇总 参考 : https://zhuanlan.zhihu.com/p/471490292 golang   	



##  什么是协程（Goroutine）

​	协程是**用户态轻量级线程**，它是**线程调度的基本单位**。通常在函数前加上go关键字就能实现并发。一个Goroutine会以一个很小的栈启动2KB或4KB，当遇到栈空间不足时，栈会**自动伸缩**， 因此可以轻易实现成千上万个goroutine同时启动。



**对比线程一般  8M 虚拟内存**



### 线程创建方式



c++ 创建线程方式：

java 创建线程方式

python 创建线程方式

linux 创建线程方式



## 性能排查

基础测试

pprof 火焰图

## 如何高效地拼接字符串

拼接字符串的方式有：`+` , `fmt.Sprintf` , `strings.Builder`, `bytes.Buffer`, `strings.Join`

-  "+"

使用`+`操作符进行拼接时，会对字符串进行遍历，计算并开辟一个新的空间来存储原来的两个字符串。

- fmt.Sprintf

  由于采用了接口参数，必须要用反射获取值，因此有性能损耗。

- 3 strings.Builder：

用WriteString()进行拼接，内部实现是指针+切片，同时String()返回拼接后的字符串，它是直接把[]byte转换为string，从而避免变量拷贝。

- 4 bytes.Buffer

`bytes.Buffer`是一个一个缓冲`byte`类型的缓冲器，这个缓冲器里存放着都是`byte`，

`bytes.buffer`底层也是一个`[]byte`切片。

-  strings.join

`strings.join`也是基于`strings.builder`来实现的,并且可以自定义分隔符，在join方法内调用了b.Grow(n)方法，这个是进行初步的容量分配，而前面计算的n的长度就是我们要拼接的slice的长度，因为我们传入切片长度固定，所以提前进行容量分配可以减少内存分配，很高效。

**性能比较**：

strings.Join ≈ strings.Builder > bytes.Buffer > "+" > fmt.Sprintf



## 数组和切片区别

数组的初始化

```go
//1


//2 
```



切片初始化

```go
	//


//

```



## 切片常见操作





##  Go 支持默认参数或可选参数吗

## ？

不支持，但支持可变参数

```go
// 这个函数可以传入任意数量的整型参数
func sum(nums ...int) {
    total := 0
    for _, num := range nums {
        total += num
    }
    fmt.Println(total)
}
```









## 别名

```go
package main

import "fmt"

type (
	Color int32 // 类型重命名
	Car   = int32
)

const (
	red  Color = 3
	audi Car   = 32
)

func main() {
	fmt.Println(red)
	fmt.Println(audi)
}

```



### 结构体打印时，`%v` 和 `%+v` 的区别



`%v`输出结构体各成员的值；

`%+v`输出结构体各成员的**名称**和**值**；

`%#v`输出结构体名称和结构体各成员的名称和值



```go
package main

import "fmt"

type stu struct {
	name string
	age  int32
}

func main() {
	s := stu{name: "hello", age: 18}
	fmt.Printf("%%vstu:%v\n", s)
	fmt.Printf("%%+vstu:%+v\n", s)
	fmt.Printf("%%#vstu:%#v\n", s)
}

结果：

%vstu:{hello 18}
%+vstu:{name:hello age:18}
%#vstu:main.stu{name:"hello", age:18}
```

## iota

```go
package main

import "fmt"

const (
	Red = 10 * iota
	Black
	Yellow
)

func main() {
	fmt.Println(Red)
	fmt.Println(Black)
	fmt.Println(Yellow)
}

```





### 如何知道一个对象是分配在栈上还是堆上？



Go和C++不同，Go局部变量会进行**逃逸分析**。如果**变量离开作用域后没有被引用**，则**优先**分配到栈上，否则分配到堆上。那么如何判断是否发生了逃逸呢？

`go build -gcflags '-m -l' xxx.go`.

关于逃逸的可能情况：变量大小不确定，变量类型不确定，变量分配的内存超过用户栈最大值，暴露给了外部指针。







###  2 个 nil 可能不相等吗？

```go
var p *int = nil
var i interface{} = nil
if(p == i){
	fmt.Println("Equal")
}
```



两者并不相同。总结：**两个nil只有在类型相同时才相等**



### GOlang GC

***标记清除法\***

分为两个阶段：标记和清除

标记阶段：从根对象出发寻找并标记所有存活的对象。

清除阶段：遍历堆中的对象，回收未标记的对象，并加入空闲链表。

缺点是需要暂停程序STW。

***三色标记法\***：

将对象标记为白色，灰色或黑色。

白色：不确定对象（默认色）；黑色：存活对象。灰色：存活对象，子对象待处理。

标记开始时，先将所有对象加入白色集合（需要STW）。首先将根对象标记为灰色，然后将一个对象从灰色集合取出，遍历其子对象，放入灰色集合。同时将取出的对象放入黑色集合，直到灰色集合为空。最后的白色集合对象就是需要清理的对象。

这种方法有一个缺陷，如果对象的引用被用户修改了，那么之前的标记就无效了。因此Go采用了**写屏障技术**，当对象新增或者更新会将其着色为灰色。

一次完整的GC分为四个阶段：

1. 准备标记（需要STW），开启写屏障。
2. 开始标记
3. 标记结束（STW），关闭写屏障
4. 清理（并发）

**混合写屏障**分为以下四步：

1. GC开始时，将栈上的全部对象标记为黑色（不需要二次扫描，无需STW）；
2. GC期间，任何栈上创建的新对象均为黑色
3. 被删除引用的对象标记为灰色
4. 被添加引用的对象标记为灰色

总而言之就是确保黑色对象不能引用白色对象，这个改进直接使得GC时间从 2s降低到2us。





### 非接口的任意类型 T() 都能够调用 `*T` 的方法吗？反过来呢？

一个T类型的值可以调用*T类型声明的方法，当且仅当T是**可寻址的**。

反之：*T 可以调用T()的方法，因为指针可以解引用。



exception：



### 08 go slice是怎么扩容的？

Go <= 1.17

如果当前容量小于1024，则判断所需容量是否大于原来容量2倍，如果大于，当前容量加上所需容量；否则当前容量乘2。

如果当前容量大于1024，则每次按照1.25倍速度递增容量，也就是每次加上cap/4。

Go1.18之后，引入了新的扩容规则：[浅谈 Go 1.18.1的切片扩容机制](https://link.zhihu.com/?target=https%3A//www.lookcos.cn/archives/1204.html)

 

![img](https://img2023.cnblogs.com/blog/3182848/202308/3182848-20230821211328513-1788770159.png)

### ❤无缓冲的 channel 和有缓冲的 channel 的区别？

（这个问题笔者也纠结了很久，直到看到一篇文章，阻塞与否是分别针对发送接收方而言的，才茅塞顿开）

对于无缓冲区channel：

发送的数据如果没有被接收方接收，那么**发送方阻塞；**如果一直接收不到发送方的数据，**接收方阻塞**；

有缓冲的channel：

发送方在缓冲区满的时候阻塞，接收方不阻塞；接收方在缓冲区为空的时候阻塞，发送方不阻塞。

可以类比生产者与消费者问题。

![img](https://pic3.zhimg.com/v2-b770e5632874d40780ecfe79701324f2_1440w.jpg)

### 为什么有协程泄露(Goroutine Leak)？

协程泄漏是指协程创建之后没有得到释放。主要原因有：

1. 缺少接收器，导致发送阻塞
2. 缺少发送器，导致接收阻塞
3. 死锁。多个协程由于竞争资源导致死锁。
4. 创建协程的没有回收。



### Go 可以限制运行时操作系统线程的数量吗？ 常见的goroutine操作函数有哪些？

可以，使用runtime.GOMAXPROCS(num int)可以设置线程数目。该值默认为CPU逻辑核数，如果设的太大，会引起频繁的线程切换，降低性能。

runtime.Gosched()，用于让出CPU时间片，让出当前goroutine的执行权限，调度器安排其它等待的任务运行，并在下次某个时候从该位置恢复执行。
runtime.Goexit()，调用此函数会立即使当前的goroutine的运行终止（终止协程），而其它的goroutine并不会受此影响。runtime.Goexit在终止当前goroutine前会先执行此goroutine的还未执行的defer语句。请注意千万别在主函数调用runtime.Goexit，因为会引发panic。
