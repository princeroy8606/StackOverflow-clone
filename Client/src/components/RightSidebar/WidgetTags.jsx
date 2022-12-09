import React from "react";

function WidgetTags() {
  const tags = [
    "Javascript",
    "Python",
    "Go",
    " Java",
    " Kotlin",
    " PHP",
    " C#",
    "  Swift",
    " R",
    " Ruby",
    " C and C++",
    " Matlab",
    " TypeScript",
    "Scala",
    " SQL",
    " HTML",
    " CSS",
    " NoSQL",
    " Rust",
    "Perl",
  ];
  return (
    <div className="widget-tags">
      <h3>Watched Tags</h3>
      <div className="widget-tags-div">
        {tags.map((tags) => (
          <p key={tags}>{tags}</p>
        ))} 
      </div>
    </div>
  );
}

export default WidgetTags;
