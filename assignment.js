// 1. what is variable?
//  ans: কোনো কিছু নির্দেশ করার জন্য সাধারণত variable বেবহার করা হয় .variable এর মান ইচ্ছে মত পরিবর্তন করা যায় .ভেরিয়েবলগুলি  ফাংশনগুলির প্রতিনিধিত্ব করতে ব্যবহৃত হয়।একে সংক্ষেপে var  বলা হয়

// 2. variable কিভাবে লিখতে হয়?

ans: var firstName = 'shorif';

console.log(firstName);


// 3. string type variable কি ও কিভাবে লিখতে হয়?

// ans:  যে variable গুলু কোর্টেশন('') এর ভিতরে লিখতে হয় বা লিখা হয় তাকে string টাইপ ভ্যারিয়েবল বলা হয়.
ex: var lastName = 'Ahmed ';
    console.log(lastName);

// 4. Number type variable কি ও কিভাবে লিখতে হয়?
// ans:  যে variable গুলু কোর্টেশন('') এর ভিতরে লিখতে হয় না বা লিখা হয় না তাকে Number টাইপ ভ্যারিয়েবল বলা হয়.
ex:
   var num = 345 ;
   console.log( num);

   // 5. Boolen type variable কি ও কিভাবে লিখতে হয়?

//    বুলিয়ান বীজগণিতের দুটি সত্য মানকে উপস্থাপন করার উদ্দেশ্যে ব্যবহার করা হয়।

ex:

   var bool= false ;
    console.log(bool);

// 6. toUpperCase & toLowerCase এর ব্যবহার কিভাবে করতে হয়?

ans:
    var exame = 'shorif ahmad';

    console.log(exame.toUpperCase());

    var nam1 = 'HABLU PROGRAMMER';
    
    console.log(nam1.toLowerCase());

// 7. Javascript এর মোট কয়টি অপারেটর আছে আর কি কি?

//ans: + , - , * , / , % 

// 8. Math.abs() এর ব্যবহার লিখুন.
ans:
    var num = 30 ;
    var num1 = 60 ;
   var sum = Math.abs(num - num1);
    console.log(sum);

// 8. Math.ceil() এর ব্যবহার লিখুন.

var num2 = 39.34 ;

console.log(Math.ceil(num2));

// 8. Math.floor() এর ব্যবহার লিখুন.

var num3 = 39.34 ;

console.log(Math.floor(num3));

// 8. Math.round() এর ব্যবহার লিখুন.

var num4 = 38.33 ;

num4 = Math.round(num4);

console.log(num4);

var num5 = 38.53 ;

num5 = Math.round(num5);

console.log(num5);


// 8. Math.random() এর ব্যবহার লিখুন.

console.log(Math.random() * 6);