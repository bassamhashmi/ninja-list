"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/next-js-logo.png
/* harmony default export */ const next_js_logo = ({"src":"/_next/static/media/next-js-logo.c299d0ac.png","height":250,"width":465,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAAAAACWpiEsAAAAH0lEQVR42mNgYoABdT+/UHMGFgYGad8gZyMeBgaYFAAvqgKTZz0RHwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./components/Navbar.tsx





function Navbar() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "logo",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: next_js_logo,
                    alt: "logo"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: "Home"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/about",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: "About"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/ninjas",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: "Ninja Listing"
                })
            })
        ]
    });
} // import React from "react";
 // import Link from "next/link";
 // import {
 //   AppBar,
 //   Box,
 //   Divider,
 //   Drawer,
 //   List,
 //   ListItem,
 //   ListItemButton,
 //   ListItemText,
 //   IconButton,
 //   MenuIcon,
 //   Toolbar,
 //   Typography,
 //   Button,
 // } from "../styles/@mui_material";
 // import { NavbarInterface } from "../interfaces";
 // const drawerWidth = 240;
 // const navItems = ["/", "/about", "/ninjas"];
 // const navItems2 = ["Home", "About", "Ninjas"];
 // export default function DrawerAppBar(props: NavbarInterface) {
 //   const { window } = props;
 //   const [mobileOpen, setMobileOpen] = React.useState(false);
 //   const handleDrawerToggle = () => {
 //     setMobileOpen(!mobileOpen);
 //   };
 //   const drawer = (
 //     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
 //       <Typography variant="h6" sx={{ my: 2 }}>
 //         MUI
 //       </Typography>
 //       <Divider />
 //       <List>
 //         {navItems.map((item, index) => (
 //           <Link href="/">
 //             <ListItem key={index} disablePadding>
 //               <ListItemButton sx={{ textAlign: "center" }}>
 //                 <ListItemText primary={item} />
 //               </ListItemButton>
 //             </ListItem>
 //           </Link>
 //         ))}
 //       </List>
 //     </Box>
 //   );
 //   const container =
 //     window !== undefined ? () => window().document.body : undefined;
 //   return (
 //     <Box sx={{ display: "flex" }}>
 //       <AppBar component="nav">
 //         <Toolbar>
 //           <IconButton
 //             color="inherit"
 //             aria-label="open drawer"
 //             edge="start"
 //             onClick={handleDrawerToggle}
 //             sx={{ mr: 2, display: { sm: "none" } }}
 //           >
 //             <MenuIcon />
 //           </IconButton>
 //           <Typography
 //             variant="h6"
 //             component="div"
 //             sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
 //           >
 //             MUI
 //           </Typography>
 //           <Box sx={{ display: { xs: "none", sm: "block" } }}>
 //             {navItems.map((item) => (
 //               <Button key={item} sx={{ color: "#fff" }}>
 //                 {item}
 //               </Button>
 //             ))}
 //           </Box>
 //         </Toolbar>
 //       </AppBar>
 //       <Box component="nav">
 //         <Drawer
 //           container={container}
 //           variant="temporary"
 //           open={mobileOpen}
 //           onClose={handleDrawerToggle}
 //           ModalProps={{
 //             keepMounted: true, // Better open performance on mobile.
 //           }}
 //           sx={{
 //             display: { xs: "block", sm: "none" },
 //             "& .MuiDrawer-paper": {
 //               boxSizing: "border-box",
 //               width: drawerWidth,
 //             },
 //           }}
 //         >
 //           {drawer}
 //         </Drawer>
 //       </Box>
 //       <Box component="main" sx={{ p: 3 }}>
 //         <Toolbar />
 //       </Box>
 //     </Box>
 //   );
 // }

;// CONCATENATED MODULE: ./components/Footer.tsx
// import Image from "next/image";

function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            href: "",
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
                "Developed by ",
                "Bassam Hashmi"
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/Layout.tsx




function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "content",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}

;// CONCATENATED MODULE: ./pages/_app.tsx



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675], () => (__webpack_exec__(2523)));
module.exports = __webpack_exports__;

})();