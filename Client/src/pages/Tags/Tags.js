import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import TagsList from "./TagsList";
import "./Tags.css";

function Tags() {
  const tagList = [
    {
      id: 1,
      title: "javascript",
      discription:
        "For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind that JavaScript is NOT the same as Java! Include all la…",
    },
    {
      id: 2,
      title: "python",
      discription:
        "Python is a multi-paradigm, dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax. Please note that P…",
    },
    {
      id: 3,
      title: "java",
      discription:
        "Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This tag is frequently used alongside other tags for lib…",
    },
    {
      id: 4,
      title: "c#",
      discription:
        'C# (pronounced "see sharp") is a high-level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets Microsoft\'s .NET family of tools and run-times, which…',
    },
    {
      id: 5,
      title: "php",
      discription:
        "PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language designed initially for server-side web development. Use this tag for questions …",
    },
    {
      id: 6,
      title: "android",
      discription:
        "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT). For topics related to Android, use Android-s…",
    },
    {
      id: 7,
      title: "html",
      discription:
        "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser. Questions regarding HTML should include a minimal reproducible ex…",
    },
    {
      id: 8,
      title: "jquery",
      discription:
        "jQuery is a JavaScript library. Consider also adding the JavaScript tag. jQuery is a popular cross-browser JavaScript library that facilitates Document Object Model (DOM) traversal, event handling…",
    },
    {
      id: 9,
      title: "c++",
      discription:
        "C++ is a general-purpose programming language. Initially, it was designed as an extension to C and has a similar syntax, but it is now a completely different language. Use this tag for questions about…",
    },
    {
      id: 10,
      title: "css",
      discription:
        "CSS (Cascading Style Sheets) is a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup Language), XML (Extensible Markup Language) documents and SV…",
    },
    {
      id: 11,
      title: "ios",
      discription:
        "iOS is the mobile operating system running on the Apple iPhone, iPod touch, and iPad. Use this tag [ios] for questions related to programming on the iOS platform. Use the related tags [objective-c] an…",
    },
    {
      id: 12,
      title: "mysql",
      discription:
        "MySQL is a free, open-source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL). DO NOT USE this tag for other DBs such as SQL Server, SQLite etc. Those are diff…",
    },
    {
      id: 13,
      title: "sql",
      discription:
        "Structured Query Language (SQL) is a language for querying databases. Questions should include code examples, table structure, sample data, and a tag for the DBMS implementation (e.g. MySQL, PostgreSQ…",
    },
    {
      id: 14,
      title: "r",
      discription:
        "R is a free, open-source programming language & software environment for statistical computing, bioinformatics, visualization & general computing. Please use minimal reproducible example(s) others ca…",
    },
    {
      id: 15,
      title: "node.js",
      discription:
        "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library. It is used for developing applications that make heavy use of the ability t…",
    },
  ];

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <h1 className="tags-h1">Tags</h1>
        <p className="tags-p">
          A tag is a keyword or label that categorizes your question with other,
          similar questions. Using <br />
          the right tags makes it easier for others to find and answer your
          question.
        </p>
        <div className="tags-list-container ">
          {tagList.map((tag) => (
            <TagsList tag={tag} key={tag.id} />
          ))}
        </div>
      </div>
      <RightSidebar />
    </div>
  );
}

export default Tags;
