import React from 'react'

const Breadcrumb = ({ paths }) => {
    return (
      <nav className="flex text-sm space-x-2">
        {paths.map((path, index) => (
          <span key={index} className="text-gray-600">
            <a href={path.link} className="hover:text-primary">{path.name}</a>
            {index < paths.length - 1 && " > "}
          </span>
        ))}
      </nav>
    );
  };
  
  export default Breadcrumb;
  