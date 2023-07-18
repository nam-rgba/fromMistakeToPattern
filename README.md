# fromMistakeToPattern

1. Using keys: React know that 1 component is absolutely brand new and rerender when it has a key propertype
2. Using ref instead of onChange and useState hook
3. Use callback function in onClick that call setState function, ensure that new state depend on old state, not current state
   !!!always using function version when update state!!!
4. Just use useEffect hook when it needed
5. when component rerender, object in component after rerender is branch new object, that's why u change dark mode, console log object has change in dependence useEffect ==> use useMemo hook
6.
