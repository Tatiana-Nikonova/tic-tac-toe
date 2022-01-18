# Игра "Крестики-нолики"

Игроки по очереди ставят крестики и нолики. Игрок, первый заполнивший диагональ, вертикаль или горизонталь своими символами, выигрывает.

![Image of the game](tictactoe.png)

## Принцип работы игры

Как работает игра:
1. Когда страница загружается, вызывается функция `startGame`. Эта функция должна сказать, кто ходит первый, затем создать игровое поле, и отрисовать его.
2. Когда игрок кликает на игровом поле, происходит вызов функции `click`. Нужно поставить метку игрока в этом поле, отрисовать поле на экране. Затем проверить, не выиграл ли игрок. Если выиграл, то поздравить его, а если еще нет — передать ход следующему игроку.

Внутреннее устройство игры делится на три части:
* логическая модель игры
* отрисовка логической модели на экране 
* реакция на действия игрока 

Игровое поле представляет собой таблицу 3х3 клетки, предлагается представить игровое поле в виде массива массивов (см. примеры ниже).

В ячейке таблицы может хранится: пустота (метки нет), либо метка игрока (х, о). Когда игрок нажимает на игровое поле, нужно установить соответствующий значок в ячейку таблицы.

Для отрисовки нового состояния игрового поля на экране нужно вызвать функцию `renderBoard` и передать в нее информацию о поле в виде массива.

Если игра закончилась победой одного из игроков, то нужно вызвать функцию `showWinner` и передать в нее номер игрока-победителя.