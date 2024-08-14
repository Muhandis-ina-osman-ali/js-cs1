let g =85;
if(g>100 || g<0)
{
  console.log("Sorry this is not grade please check it "+g);
}
else if(g >94 && g <101)
{
    console.log("A+: "+g);
}
else if(g >89.99 && g <95)
{
    console.log("A: "+g);
}
else if(g >84 && g <90)
{
    console.log("B+: "+g);
}
else if(g >=60 && g <65)
{
    console.log("D+: "+g);
}
else
{
    console.log("F: "+g);
}