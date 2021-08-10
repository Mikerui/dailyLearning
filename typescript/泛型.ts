function log<T>(value: T): T {
    return value
}
log<string[]>(['a', 'b'])
log(['a', 'b'])

type Log = <T> (value: T) => T

let myLog: Log = log