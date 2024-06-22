
import { Button } from 'antd';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

interface ToggleThemeButtonComponentProps{
  darkTheme: Boolean;
  toggleTheme: () => void;
}

const ToggleThemeButtonComponent = ( {darkTheme, toggleTheme}: ToggleThemeButtonComponentProps ) => {
  return (
    <div className='toggle-theme-btn'>
        <Button onClick={toggleTheme}>
            {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
        </Button>
    </div>
  )
}

export default ToggleThemeButtonComponent