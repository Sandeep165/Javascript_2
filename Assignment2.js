// //Q 2 Write a simple JavaScript program to join all elements of the following array into a string.
// myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.toString());
// console.log(myColor.join());
// console.log(myColor.join('+'));


// //Q 3   Write a JavaScript program to sort the items of an array

// var arr1=[-3,8,7,6,5,-4,3,2,1];
// var arr2=[];
// var min=arr1[0];
// var pos;
// var max=arr1[0];
// for (i=0; i<arr1.length; i++)
// {
//         if (max<arr1[i]) max=arr1[i];
// }

// for (var i=0;i<arr1.length;i++)
// {
//         for (var j=0;j<arr1.length;j++)
//         {
//                 if (arr1[j]!="x")
//                 {
//                         if (min>arr1[j]) 
//                         {
//                                 min=arr1[j];
//                                 pos=j;
//                         }
//                 }
//         }
//         arr2[i]=min;
//         arr1[pos]="x";
//         min=max;
// }
// console.log(arr2);

// //Q4   Write a JavaScript program to find the most frequent item of an array

// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var mf = 1;
// var m = 0;
// var item;
// for (var i=0; i<arr1.length; i++)
// {
//         for (var j=i; j<arr1.length; j++)
//         {
//                 if (arr1[i] == arr1[j])
//                  m++;
//                 if (mf<m)
//                 {
//                   mf=m; 
//                   item = arr1[i];
//                 }
//         }
//         m=0;
// }
// console.log(item+" ( " +mf +" times ) ") ;

// //Q6 Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)
// var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];

// // sol 1:- 
// function removeDuplicates(Mynum) {
//     var x,
//         len=Mynum.length,
//         out=[],
//         obj=[];

//     for (x=0; x<len; x++) {
//       obj[Mynum[x]]=0;
//     }
//     for (x in obj) {
//       out.push(x);
//     }
//     return out;
//   }
// var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
// var result = removeDuplicates(Mynum);
// console.log(Mynum);
// console.log(result);

// //sol2:-
// const unique = [...new Set(Mynum)]   //using spread operator directly
// console.log(unique);