import Button from './Button'
//function App() (Old way of creating functional component)

const App = ()=>
{
    //div should be in the same line 
    return <div>
        <h1>Useful websites!</h1>
        <h3>Which website do you want to open?</h3>
        <Button name="Google" link="http://www.google.com"></Button>
        <Button name="YouTube" link="https://www.youtube.com"></Button>
        <Button name="Facebook" link="https://www.facebook.com"></Button>
        <Button name="Github" link="https://www.github.com"></Button>
        <Button name="LinkedIn" link="https://www.linkedin.com"></Button>
        
    </div>
}
export default App