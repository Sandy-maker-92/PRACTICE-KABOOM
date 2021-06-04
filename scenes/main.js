const player = add([
  sprite('Player'),
  scale(0.5),
  pos(20,20),
  body()
])
const MOVE_SPPED = 200

keyDown('right', () => {
player.move(MOVE_SPPED, 0)
})

keyDown('left', () => {
player.move(-MOVE_SPPED, 0)
})

addLevel([
'      ',
'  @   ',
'      ',
'xxxxx',
], {
  width: 40,
  height: 40,
  'x' : [sprite('ground'), solid()],
'@' : [sprite('enemy'), scale(0.5), body(), 'dangerous']
}) 

player.collides('dangerous' , () => {
  destroy(player)
})

 