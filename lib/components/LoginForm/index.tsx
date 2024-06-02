import styles from './styles.module.css'
import { Button } from '../Button';

export interface LoginFormProps{
    userLabel?: string;
    userLabelClass?: string;
    userPlaceholder?: string;

    passwordLabel?: string;
    passwordPlaceholder?: string;

    ButtonLabel?: string;

    errorMessage?: string;

    additionalMessage?: React.ReactNode;
    additionalMessageLink?: string;

    layout?:'horizontal'|'vertical'

    // Callback
    // onSubmit?: 

}

export function LoginForm(props: LoginFormProps) {
    const { 
        userLabel,
        userLabelClass,
        userPlaceholder = "Email",
        passwordLabel,
        passwordPlaceholder = "Enter your password",
        ButtonLabel="Sign In",
        errorMessage,
        additionalMessage=`Don't have an account? <span className="underline">Register</span>`,
        additionalMessageLink,
        layout='vertical'
    } = props;

    return (
        <form className={`eskel-component ${styles['login-form-wrapper']} ${layout == 'vertical' ? styles['layout-vertical'] : layout == 'horizontal' ? styles['layout-horizontal'] : ''}` }>
            {/* User/Email */}
            {userLabel && 
                <label className={userLabelClass}>{userLabel}</label>
            }
            <input
                type="text"
                placeholder={userPlaceholder}
            />

            {/* Password */}
            {passwordLabel && 
                <label>{passwordLabel}</label>
            }
            <input
                type="password"
                placeholder={passwordPlaceholder}
            />

            {/* Buttons */}
            <Button>
                {ButtonLabel}
            </Button>

            {/* Other */}
            {errorMessage &&
                <div className='error'>
                    {errorMessage}
                </div>
            }
            
            {additionalMessageLink && additionalMessage &&
                <a href={additionalMessageLink} dangerouslySetInnerHTML={{ __html: additionalMessage as string }}></a>
            }
            {!additionalMessageLink && additionalMessage &&
                <div dangerouslySetInnerHTML={{ __html: additionalMessage as string }}></div>
            }

        </form>
    );
}