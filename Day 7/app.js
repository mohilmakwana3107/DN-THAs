//************************************ Solution of Q=>1 ************************************
function keys(data)
{ 
    var k=Object.keys(data);
    return k;
}
console.log(keys( { name : "David Rayy", sclass : "VI", rollno : 12 }));
//*******************************************************************************************


//************************************ Solution of Q=>2 *************************************
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log(student);
delete student.rollno;
console.log(student);
//*******************************************************************************************


//************************************ Solution of Q=>3 *************************************
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log(Object.keys(student).length);
//*******************************************************************************************


//************************************ Solution of Q=>4 *************************************
var j=[{ author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
             { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
             { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];;
      for(var i=0;i<j.length;i++)
      {
        var bn = j[i].title+j[i].readingStatus;

          if (j[i].readingStatus)
          {
            console.log(bn+" is already read by you. Go to next one.")
          }
          else
          {
            console.log(bn+" is not read by you");
          }
      }
//*******************************************************************************************


//************************************ Solution of Q=>5 *************************************
function demo(r,h)
      {
        let radius=r;
        let height=h;
        let ans = Math.PI * radius * radius * height;
        return (ans.toFixed(4));
      }
      console.log(demo(10,7));
//*******************************************************************************************


//************************************ Solution of Q=>6 *************************************
var library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      libraryID: 3245,
    },
  ];
  console.log(library.sort(compare));
  function compare(a, b) 
  {
    if (a.libraryID < b.libraryID) {
      return 1;
    }
    if (a.libraryID > b.libraryID) {
      return -1;
    }
    return 0;
  }
//*******************************************************************************************