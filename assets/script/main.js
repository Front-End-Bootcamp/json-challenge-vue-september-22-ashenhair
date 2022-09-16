import data from "./data.json" assert {type: "json"};

const groups = data.reduce((groups, item) => {  
  const group = (groups[item.group] || [] );  //data jsondan çektiğimiz dataların group başlığı altındakileri item.group a atıyoruz ve boş bir array oluşturuyoruz.
  item.type === null ? group.push(item.name) : group.push("Assistant: "+item.name) //item.type null ise boş gruba push ile yüklemesini yapıyoruz null değil ise başına "Assistant" ekliyoruz.
  groups[item.group] = group;
  return groups;
}, {});

console.log(groups["Orchid"]);
