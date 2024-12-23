```javascript
// Solution:  Ensure correct CSS specificity and order of stylesheets
// Add !important to critical styles if needed (Use with caution)
function MyComponent() {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-bold !important">My Component</h1>
      <p className="text-gray-700 mt-2 !important">This is some text.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 !important">
        Click Me
      </button>
    </div>
  );
}
```