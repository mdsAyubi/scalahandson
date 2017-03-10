val seq = Seq(1,2)
val ls = List(1,2,3)

ls.head
ls.take(2)
ls.tail
ls.last
ls.contains(7)
ls.zip (List(4,5,6))


class IntEx(n:Int){
  def add(m:Int) = new IntEx(n+m)
  def ::(m:Int) = new IntEx((n+m))
}

val i = new IntEx(1)
i.add(12)
23::i

val l = (1 to 10).toList //List.range(1,10)
l.head
l.last
l.size
l.take(6)
l.init
l.takeRight(3)
l.tail
l.contains(7)

-1 :: ls
ls ::: (10 to 15).toList

val nums = 1 :: 2 :: 3 :: 4 :: Nil


val set = Set(1,2,3,4,2,3,1)
set.size
set(2)
set + 4

val st = (1 to 5).toSet
val set2 = st + 6
st


val map = Map(1 -> "a", 2 -> "b")
map(1)
map.get(9)
map.getOrElse(1, "z")
map.getOrElse(9, "z")

val map2 = map.withDefaultValue("ayubi")
map2

val a = Array("1","2","3","4","5")
a(0)
a(a.length-1)
a.last
a.length
val a2 = Array("1","2", 1, 2)
a2(0) = "1-new"
a2

val combinationList = a.combinations(3).toList