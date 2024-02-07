export function dateFormat(date){
    return new Date(date).toLocaleString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })
}

