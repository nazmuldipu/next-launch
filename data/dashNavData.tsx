export const navTree = [
    { label: "Home", roles: [], path: "/", subNav: [] },
    { label: "Dashboard", roles: ["ROLE_ADMIN"], path: "/dashboard", subNav: [] },
    {
        label: "Ship",
        path: "",
        roles: ["ROLE_ADMIN"],
        subNav: [
            { label: "Add", path: "/dashboard/ships/add" },
            { label: "Ships", path: "/dashboard/ships" },
            { label: "Ship map", path: "/dashboard/ships/map" },
        ],
    },
];
