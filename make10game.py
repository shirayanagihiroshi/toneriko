import copy
from fractions import Fraction

baselist = [["",3,4,7,8]]
changelist1 = []
changelist2 = []
changelist3 = []

def pop_two(target_list, i, j):
    if i > j:
        target_list.pop(i)
        target_list.pop(j)
    elif j > i:
        target_list.pop(j)
        target_list.pop(i)
    else:
        target_list.pop(i)

def do_add(target_list, a, b):
    target_list[0] += '(' + str(a) + '+' + str(b) + ')'
    target_list.append(a + b)

def do_del(target_list, a, b):
    target_list[0] += '(' + str(a) + '-' + str(b) + ')'
    target_list.append(a - b)

def do_mul(target_list, a, b):
    target_list[0] += '(' + str(a) + '*' + str(b) + ')'
    target_list.append(a * b)

def do_div(target_list, a, b):
    target_list[0] += '(' + str(a) + '/' + str(b) + ')'
    if b != 0:
        target_list.append(Fraction(a, b))

def mycalc(source_list, destination_list):    
    for target in source_list:
        for i, x in enumerate(target):
            if i != 0:
                for j, y in enumerate(target):
                    if (j != 0) and (i != j):
                        # 普通に代入すると参照だけがコピーされる
                        # このコピーは新たなリストが生成されるコピー
                        # 多次元配列ではcopy.deepcopyとする必要がある
                        temp_list = copy.copy(target)
                        pop_two(temp_list, i, j)
                        do_add(temp_list, x, y)
                        destination_list.append(temp_list)

                        temp_list = copy.copy(target)
                        pop_two(temp_list, i, j)
                        do_del(temp_list, x, y)
                        destination_list.append(temp_list)
                        temp_list = copy.copy(target)

                        pop_two(temp_list, i, j)
                        do_del(temp_list, y, x)
                        destination_list.append(temp_list)

                        temp_list = copy.copy(target)
                        pop_two(temp_list, i, j)
                        do_mul(temp_list, x, y)
                        destination_list.append(temp_list)

                        temp_list = copy.copy(target)
                        pop_two(temp_list, i, j)
                        do_div(temp_list, x, y)
                        destination_list.append(temp_list)

                        temp_list = copy.copy(target)
                        pop_two(temp_list, i, j)
                        do_div(temp_list, y, x)
                        destination_list.append(temp_list)

mycalc(baselist, changelist1)
mycalc(changelist1, changelist2)
mycalc(changelist2, changelist3)
for aa in changelist3:
    if len(aa) > 1 and aa[1] == 10:
        print(aa)
