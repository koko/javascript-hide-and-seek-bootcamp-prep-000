function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  var target = document.getElementById('nested')
  return target.querySelector('.target')
}

function increaseRankBy(n){
  var ranks = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < ranks.length; i++){
    var rank = parseInt(ranks[i].innerHTML)
    ranks[i].innerHTML = rank + n
  }
}

function deepestChild(){
  var node = document.querySelector('div#grand-node')
  var newNode = node
  while (true){
    newNode = node.querySelector(':first-child')
    if (newNode == undefined){
      return node
    }
    else{
      node = newNode
    }
  }
  return node
}
