import StarsComponent from '../StarsComponent/StarsComponent'

function NotationComponent()
{
    return (
        <div className='w-4/5 h-96 flex flex-col'>
            <div className='flex justify-between m-3'>
                <div>
                    <StarsComponent title={'Design'} />
                </div>
                <div>
                    <StarsComponent title={'Fonctionnalité'} />
                </div>
            </div>
            <div className='flex justify-between m-3'>
                <div>
                    <StarsComponent title={'Animation'} />
                </div>
                <div>
                    <StarsComponent title={'Choix technique'} />
                </div>
            </div>
        </div>
    )
}

export default NotationComponent