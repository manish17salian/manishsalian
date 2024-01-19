import React from 'react';

interface ButtonProps {
  text: string;
  onClickFunc: React.MouseEventHandler<HTMLButtonElement>;
}

  const Button: React.FC<ButtonProps> = ({ text, onClickFunc }) =>  {

    return(<>
    <style jsx>
        {
            `
            .button {
                --color: #DDDD;
                padding: 0.8rem 1.7rem;
                background-color: transparent;
                border-radius: .3em;
                position: relative;
                overflow: hidden;
                cursor: pointer;
                transition: .5s;
                font-weight: 800;
                font-size: 20px;
                border: 1px solid;
                font-family: inherit;
                text-transform: uppercase;
                color: var(--color);
                z-index: 1;
               }
               
               .button::before, .button::after {
                content: '';
                display: block;
                width: 50px;
                height: 50px;
                transform: translate(-50%, -50%);
                position: absolute;
                border-radius: 50%;
                z-index: -1;
                background-color: var(--color);
                transition: 1s ease;
               }
               
               .button::before {
                top: -1em;
                left: -1em;
               }
               
               .button::after {
                left: calc(100% + 1em);
                top: calc(100% + 1em);
               }
               
               .button:hover::before, .button:hover::after {
                height: 410px;
                width: 410px;
               }
               
               .button:hover {
                color: rgb(10, 25, 30);
               }
               
               .button:active {
                filter: brightness(.8);
               }
               
            `
        }
    </style>
        <button className="button max-lg:text-xs" onClick={onClickFunc}>{text}</button>
    </>
    )
}

export default Button;