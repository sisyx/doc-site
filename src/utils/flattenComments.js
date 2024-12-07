export default function flattenComments(comments) {
    const flatList = [];
  
    const flatten = (comment) => {
      flatList.push(comment);
      if (comment.children && comment.children.length > 0) {
        comment.children.forEach(flatten);
      }
    };
  
    comments.forEach(flatten);
    
    return flatList;
  }
  