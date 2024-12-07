
export default function buildTreeForComments(comments) {
    const map = new Map();
    const tree = [];
  
    // ابتدا تمام آیتم‌ها را در یک Map ذخیره کنید
    comments.forEach(comment => map.set(comment.id, { ...comment, children: [] }));
  
    // سپس ساختار درختی ایجاد کنید
    comments.forEach(comment => {
      if (comment.replayId === 0) {
        tree.push(map.get(comment.id));
      } else {
        const parent = map.get(comment.replayId);
        if (parent) {
          parent.children.push(map.get(comment.id));
        }
      }
    });
  
    return tree;
  }