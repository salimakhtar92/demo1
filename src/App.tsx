import MyVirtualizedList from './components/virtual-list';
import useElementObserver from './components/hooks/useElementObserver';
import './App.css'

function App() {
  const [elementRef, isVisible]= useElementObserver({
    root: null,
    rootMargin: "0px",
    threasold: 1
  });

  return (
    <>
      <h1>App</h1>
      <div style={{position: "fixed"}}>{isVisible ? "Visible" : "Not Visible"}</div>
      <MyVirtualizedList />
      <div ref={elementRef as any} style={{height: "60px", background: "red"}}>
      </div>
    </>
  )
}

export default App
