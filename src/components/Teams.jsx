
export default function Teams({teams}) {
    return <div className='flex gap-8 mt-8 justify-center'>

        {teams && teams[0] && teams[0].length > 0 && <ul>
            <h4 className='text-lg font-bold'>Ev komandası</h4>
            {
                teams[0].map(({name, id}) => (
                    <li key={id}>
                        {name}
                    </li>
                ))
            }
        </ul>
        }
        {teams && teams[1] && teams[1].length > 0 && <ul>
            <h4 className='text-lg font-bold'>Səfər komandası</h4>
            {
                teams[1].map(({name, id}) => (
                    <li key={id}>
                        {name}
                    </li>
                ))
            }
        </ul>}
    </div>
}