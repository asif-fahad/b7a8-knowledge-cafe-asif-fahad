import React from 'react';

const Questions = () => {
    return (
        <div>
            <h1 className='text-lg font-black'>Questions About React</h1>
            <div>
                <div className='font-bold'>
                    1. Props vs State
                </div>
                <div>
                    Ans: Props are immutable but State is mutable. Props allows to send data from parent component to child component but state cannot be accessed by child components.
                </div>
            </div>
            <div>
                <div className='font-bold'>
                    2. How does useState work?
                </div>
                <div>
                    Ans: The useState value is used to make changes in the UI. When we call the state update function, React schedules a re-render of the component with the updated state value. useState hook is a powerful React tool that allows us to create dynamic and interactive UIs.
                </div>
            </div>
            <div>
                <div className='font-bold'>
                    3. Purpose of useEffect other than fetching data.
                </div>
                <div>
                    Ans: It manages side effects such as setting up and tearing down timers, subscription, and event listeners. It also use for animating component transition, handling browser or network events.
                </div>
            </div>
            <div>
                <div className='font-bold'>
                    4. How Does React work?
                </div>
                <div>
                    Ans: React is a JavaScript library. It has component based architecture to breakdown into small components to make UI better. It has powerful tool like useState and useEffect which allows to write short code then JavaScript to build dynamic UIs. React has virtual DOM to efficiently update the UI. Virtual DOM is lightweight copy of actual DOM and React keeps a memory. It is much faster than actual DOM. It helps rendering smoother.
                </div>
            </div>
        </div>
    );
};

export default Questions;