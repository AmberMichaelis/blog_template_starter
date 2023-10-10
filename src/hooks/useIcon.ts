import useIcons from "./useIcons";

const useIcon = (id?: number) => {
    const {data: icons } = useIcons();
    return icons?.results.find(i => i.id === id);
}

export default useIcon;
