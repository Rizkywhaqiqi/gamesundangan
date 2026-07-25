import { n as __toESM } from "../_runtime.mjs";
import { t as background_default } from "./background-BT3HzzKD.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { E as isRedirect, g as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay$1, d as Slot, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-Bi2OUiBj.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { i as stringType, n as numberType, r as objectType, t as enumType } from "../_libs/zod.mjs";
import { a as ChevronRight, i as Clock, n as MapPin, o as ChevronLeft, r as Heart, s as CalendarDays, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as VisuallyHidden } from "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { t as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BFd_91c6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var idle_default = "/assets/idle-CtHE22eB.gif";
var left_default = "/assets/left-BFW8y2M9.gif";
var right_default = "/assets/right-D83EGNE8.gif";
var walk_default = "/assets/walk-C26Ku3CC.mp3";
var wedding = {
	groom: "Lionel Messi",
	bride: "Gianni Infantino",
	hashtag: "#LionelGianniForever",
	akad: {
		label: "Akad Nikah",
		date: "Sabtu, 12 Oktober 2026",
		time: "09:00 WIB",
		venue: "Grand Chapel, Zurich",
		address: "Bahnhofstrasse 1, Zurich, Switzerland",
		maps: "https://www.google.com/maps/search/?api=1&query=Zurich"
	},
	resepsi: {
		label: "Resepsi",
		date: "Sabtu, 12 Oktober 2026",
		time: "18:00 WIB",
		venue: "Lakeside Garden Hall",
		address: "Seestrasse 45, Zurich, Switzerland",
		maps: "https://www.google.com/maps/search/?api=1&query=Zurich"
	}
};
var checkpoints = [
	{
		id: "opening",
		index: 1,
		title: "Opening",
		subtitle: "Halaman Pembuka",
		xPercent: .25,
		color: "#ec4899"
	},
	{
		id: "couple",
		index: 2,
		title: "Couple Story",
		subtitle: "Kisah Kami",
		xPercent: .35,
		color: "#f97316"
	},
	{
		id: "event",
		index: 3,
		title: "Event Details",
		subtitle: "Detail Acara",
		xPercent: .45,
		color: "#22c55e"
	},
	{
		id: "gallery",
		index: 4,
		title: "Gallery",
		subtitle: "Galeri Foto",
		xPercent: .55,
		color: "#3b82f6"
	},
	{
		id: "rsvp",
		index: 5,
		title: "RSVP",
		subtitle: "Konfirmasi Kehadiran",
		xPercent: .67,
		color: "#a855f7"
	},
	{
		id: "wishes",
		index: 6,
		title: "Wedding Wishes",
		subtitle: "Ucapan & Doa",
		xPercent: .77,
		color: "#eab308"
	},
	{
		id: "thanks",
		index: 7,
		title: "Thank You",
		subtitle: "Penutup",
		xPercent: .85,
		color: "#ef4444"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function CheckpointModal({ openId, onOpenChange, children }) {
	const cp = checkpoints.find((c) => c.id === openId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: !!openId,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-[92vw] sm:max-w-md p-0 overflow-hidden border-0 bg-transparent shadow-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisuallyHidden, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: cp ? cp.title : "Checkpoint" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative rounded-3xl bg-card p-6 shadow-2xl ring-1 ring-border max-h-[85vh] overflow-y-auto",
				children: [cp && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "inline-block rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white",
							style: { backgroundColor: cp.color },
							children: ["Checkpoint ", cp.index]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-serif text-2xl font-semibold text-foreground",
							children: cp.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground italic",
							children: cp.subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-3 h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent" })
					]
				}), children]
			})]
		})
	});
}
function Controls({ onHold, onRelease, disabled }) {
	const handlers = (dir) => ({
		onPointerDown: (e) => {
			if (disabled) return;
			e.preventDefault();
			e.target.setPointerCapture?.(e.pointerId);
			onHold(dir);
		},
		onPointerUp: (e) => {
			e.preventDefault();
			onRelease();
		},
		onPointerCancel: () => onRelease(),
		onPointerLeave: () => onRelease(),
		onContextMenu: (e) => e.preventDefault()
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute bottom-6 inset-x-0 flex items-center justify-between px-6 pointer-events-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-label": "Jalan ke kiri",
				disabled,
				...handlers("left"),
				className: "pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary shadow-xl ring-2 ring-white active:scale-95 active:bg-primary active:text-white disabled:opacity-40 transition touch-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-8 w-8" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm",
				children: "Tekan & tahan untuk jalan"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-label": "Jalan ke kanan",
				disabled,
				...handlers("right"),
				className: "pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary shadow-xl ring-2 ring-white active:scale-95 active:bg-primary active:text-white disabled:opacity-40 transition touch-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-8 w-8" })
			})
		]
	});
}
function sanitizeGuestName(raw) {
	if (!raw) return "";
	return raw.replace(/<[^>]*>/g, "").replace(/[\r\n\t]+/g, " ").trim().slice(0, 60);
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function Opening({ guestName, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "mx-auto h-6 w-6 text-primary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "The Wedding of"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "mt-1 font-serif text-3xl leading-tight text-foreground",
				children: [
					wedding.groom,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-2 text-accent",
						children: "&"
					}),
					wedding.bride
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-muted-foreground italic",
				children: wedding.hashtag
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-4 h-px bg-gradient-to-r from-transparent via-accent to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Kepada Yth."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif text-lg font-semibold text-foreground",
				children: guestName || "Bapak / Ibu / Saudara / i"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-muted-foreground",
				children: "Tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir di hari bahagia kami."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: onClose,
				className: "mt-5 w-full",
				children: "Mulai Perjalanan"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-[11px] text-muted-foreground",
				children: "Tekan & tahan tombol ← / → untuk berjalan menyusuri taman."
			})
		]
	});
}
function CoupleStory() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 text-sm text-foreground/90",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-3",
			children: [wedding.groom, wedding.bride].map((name, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-secondary/60 p-3 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/40 font-serif text-2xl text-accent-foreground",
						children: name.split(" ").map((n) => n[0]).join("").slice(0, 2)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-serif text-base font-semibold",
						children: name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] italic text-muted-foreground",
						children: i === 0 ? "Putra dari Bpk. & Ibu Messi" : "Putri dari Bpk. & Ibu Infantino"
					})
				]
			}, name))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-accent/30 bg-cream/60 p-4 text-center leading-relaxed",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif italic text-base",
				children: "\"Dan di antara tanda-tanda kekuasaan-Nya, Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya.\""
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-[11px] uppercase tracking-widest text-muted-foreground",
				children: "Ar-Rum: 21"
			})]
		})]
	});
}
function Card({ event }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-accent/30 bg-cream/60 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-center font-serif text-xl font-semibold text-primary",
				children: event.label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-3 space-y-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" }), event.date]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" }), event.time]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							event.venue,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: event.address
							})
						] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				size: "sm",
				className: "mt-3 w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: event.maps,
					target: "_blank",
					rel: "noreferrer",
					children: "Buka Google Maps"
				})
			})
		]
	});
}
function EventDetails() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { event: wedding.akad }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { event: wedding.resepsi })]
	});
}
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-3 text-center text-xs text-muted-foreground italic",
			children: "Momen-momen indah kami"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-3 gap-2",
			children: [
				"#f5d0a9",
				"#c9d9c1",
				"#f0c6c9",
				"#d5c6e0",
				"#f2e6b8",
				"#c6dfea"
			].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-square rounded-xl shadow-sm ring-1 ring-black/5 flex items-center justify-center font-serif text-2xl text-white/80",
				style: { background: `linear-gradient(135deg, ${c}, #ffffff)` },
				children: "♥"
			}, i))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-center text-[11px] text-muted-foreground",
			children: "Foto asli akan tampil di hari-H."
		})
	] });
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var rsvpSchema = objectType({
	guest_name: stringType().trim().min(1).max(80),
	attendance: enumType(["attending", "not_attending"]),
	party_size: numberType().int().min(1).max(10),
	message: stringType().trim().max(500).optional().nullable()
});
var wishSchema = objectType({
	guest_name: stringType().trim().min(1).max(80),
	message: stringType().trim().min(1).max(500)
});
var submitRsvp = createServerFn({ method: "POST" }).inputValidator((raw) => rsvpSchema.parse(raw)).handler(createSsrRpc("5415a8fa0484317c21e3436c1fdbfb347ba7508662e13027aa0392709c49ee20"));
var submitWish = createServerFn({ method: "POST" }).inputValidator((raw) => wishSchema.parse(raw)).handler(createSsrRpc("89cfe436f87b720523e97cb824e7e61c6a09351afeb7221eed8a0cea44518759"));
var listWishes = createServerFn({ method: "GET" }).handler(createSsrRpc("3e310b31f448f214ee2d55445000187a5d783b2e41482400ce4f9dcbb94b92b9"));
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
function RsvpForm({ defaultName }) {
	const submit = useServerFn(submitRsvp);
	const [name, setName] = (0, import_react.useState)(defaultName);
	const [attendance, setAttendance] = (0, import_react.useState)("attending");
	const [partySize, setPartySize] = (0, import_react.useState)(1);
	const [message, setMessage] = (0, import_react.useState)("");
	const [done, setDone] = (0, import_react.useState)(false);
	const mutation = useMutation({
		mutationFn: () => submit({ data: {
			guest_name: name.trim(),
			attendance,
			party_size: partySize,
			message: message.trim() || null
		} }),
		onSuccess: () => {
			toast.success("Terima kasih, konfirmasi terkirim!");
			setDone(true);
		},
		onError: (e) => toast.error(e.message || "Gagal mengirim RSVP")
	});
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-primary/10 p-4 text-center text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-serif text-lg",
			children: "Terima kasih 💐"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-muted-foreground",
			children: "Konfirmasi kehadiranmu sudah kami terima."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: (e) => {
			e.preventDefault();
			mutation.mutate();
		},
		className: "space-y-3 text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "rsvp-name",
				children: "Nama Tamu"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "rsvp-name",
				value: name,
				onChange: (e) => setName(e.target.value),
				required: true,
				maxLength: 80
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Kehadiran" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 grid grid-cols-2 gap-2",
				children: ["attending", "not_attending"].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setAttendance(v),
					className: `rounded-lg border px-3 py-2 text-xs font-medium transition ${attendance === v ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background"}`,
					children: v === "attending" ? "Hadir ❤" : "Berhalangan"
				}, v))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "rsvp-party",
				children: "Jumlah Tamu"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "rsvp-party",
				type: "number",
				min: 1,
				max: 10,
				value: partySize,
				onChange: (e) => setPartySize(Math.min(10, Math.max(1, Number(e.target.value) || 1)))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "rsvp-msg",
				children: "Pesan (opsional)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				id: "rsvp-msg",
				value: message,
				onChange: (e) => setMessage(e.target.value),
				maxLength: 500,
				rows: 3
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				className: "w-full",
				disabled: mutation.isPending || !name.trim(),
				children: mutation.isPending ? "Mengirim..." : "Kirim Konfirmasi"
			})
		]
	});
}
function Wishes({ defaultName }) {
	const submit = useServerFn(submitWish);
	const list = useServerFn(listWishes);
	const qc = useQueryClient();
	const [name, setName] = (0, import_react.useState)(defaultName);
	const [message, setMessage] = (0, import_react.useState)("");
	const q = useQuery({
		queryKey: ["wishes"],
		queryFn: () => list()
	});
	const mutation = useMutation({
		mutationFn: () => submit({ data: {
			guest_name: name.trim(),
			message: message.trim()
		} }),
		onSuccess: () => {
			toast.success("Ucapanmu terkirim, terima kasih!");
			setMessage("");
			qc.invalidateQueries({ queryKey: ["wishes"] });
		},
		onError: (e) => toast.error(e.message || "Gagal mengirim ucapan")
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: (e) => {
				e.preventDefault();
				mutation.mutate();
			},
			className: "space-y-2 rounded-2xl border border-accent/30 bg-cream/50 p-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "wish-name",
					children: "Nama"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "wish-name",
					value: name,
					onChange: (e) => setName(e.target.value),
					required: true,
					maxLength: 80
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "wish-msg",
					children: "Ucapan & Doa"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "wish-msg",
					value: message,
					onChange: (e) => setMessage(e.target.value),
					required: true,
					maxLength: 500,
					rows: 3
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "w-full",
					disabled: mutation.isPending || !name.trim() || !message.trim(),
					children: mutation.isPending ? "Mengirim..." : "Kirim Ucapan"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-center text-xs uppercase tracking-widest text-muted-foreground",
				children: "Ucapan Tamu"
			}),
			q.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-xs text-muted-foreground",
				children: "Memuat..."
			}),
			q.data && q.data.wishes.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-xs text-muted-foreground italic",
				children: "Jadilah yang pertama memberi ucapan 💌"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "max-h-56 space-y-2 overflow-y-auto pr-1",
				children: q.data?.wishes.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl bg-secondary/60 p-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold text-foreground",
						children: w.guest_name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-foreground/80",
						children: w.message
					})]
				}, w.id))
			})
		] })]
	});
}
function ThankYou() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif text-lg italic text-foreground",
				children: "Terima kasih telah menjadi bagian dari hari spesial kami."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-4 h-px bg-gradient-to-r from-transparent via-accent to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-serif text-2xl text-primary",
				children: [
					wedding.groom,
					" & ",
					wedding.bride
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-muted-foreground",
				children: "Kehadiran & doa restu Anda adalah hadiah terindah bagi kami."
			})
		]
	});
}
var BG_ASPECT = 3072 / 714;
var CHARACTER_HEIGHT = 120;
var NEAR_THRESHOLD = 90;
var WALK_SPEED = 3;
var CHECKPOINT_PADDING = 100;
function renderCheckpoint(id, guestName, onClose) {
	switch (id) {
		case "opening": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Opening, {
			guestName,
			onClose
		});
		case "couple": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoupleStory, {});
		case "event": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventDetails, {});
		case "gallery": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {});
		case "rsvp": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RsvpForm, { defaultName: guestName });
		case "wishes": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wishes, { defaultName: guestName });
		case "thanks": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThankYou, {});
	}
}
function World() {
	const [viewport, setViewport] = (0, import_react.useState)({
		w: 360,
		h: 640
	});
	const [cameraX, setCameraX] = (0, import_react.useState)(0);
	const cameraRef = (0, import_react.useRef)(0);
	const [minCameraX, setMinCameraX] = (0, import_react.useState)(0);
	const [maxCameraX, setMaxCameraX] = (0, import_react.useState)(0);
	const initializedRef = (0, import_react.useRef)(false);
	const [facing, setFacing] = (0, import_react.useState)("right");
	const [moving, setMoving] = (0, import_react.useState)(null);
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const [visited, setVisited] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [guestName, setGuestName] = (0, import_react.useState)("");
	const [started, setStarted] = (0, import_react.useState)(false);
	const audioRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const params = new URLSearchParams(window.location.search);
		setGuestName(sanitizeGuestName(params.get("to")));
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.classList.add("invitation-lock");
		return () => document.body.classList.remove("invitation-lock");
	}, []);
	(0, import_react.useEffect)(() => {
		const measure = () => setViewport({
			w: window.innerWidth,
			h: window.innerHeight
		});
		measure();
		window.addEventListener("resize", measure);
		return () => window.removeEventListener("resize", measure);
	}, []);
	const worldWidth = Math.max(viewport.w, Math.round(viewport.h * BG_ASPECT));
	const characterCenterX = viewport.w / 2;
	const firstCheckpointX = checkpoints[0].xPercent * worldWidth;
	const lastCheckpointX = checkpoints[checkpoints.length - 1].xPercent * worldWidth;
	const calculatedMinCameraX = firstCheckpointX - CHECKPOINT_PADDING;
	const calculatedMaxCameraX = lastCheckpointX + CHECKPOINT_PADDING;
	(0, import_react.useEffect)(() => {
		setMinCameraX(calculatedMinCameraX);
		setMaxCameraX(calculatedMaxCameraX);
	}, [calculatedMinCameraX, calculatedMaxCameraX]);
	(0, import_react.useEffect)(() => {
		if (!initializedRef.current && minCameraX > 0) {
			initializedRef.current = true;
			cameraRef.current = minCameraX;
			setCameraX(minCameraX);
		}
	}, [minCameraX]);
	const clamp = (0, import_react.useCallback)((n) => Math.max(minCameraX, Math.min(maxCameraX, n)), [minCameraX, maxCameraX]);
	(0, import_react.useEffect)(() => {
		if (!moving) return;
		let raf = 0;
		const step = () => {
			const delta = moving === "right" ? WALK_SPEED : -3;
			const next = clamp(cameraRef.current + delta);
			cameraRef.current = next;
			setCameraX(next);
			raf = requestAnimationFrame(step);
		};
		raf = requestAnimationFrame(step);
		return () => cancelAnimationFrame(raf);
	}, [moving, clamp]);
	(0, import_react.useEffect)(() => {
		const el = audioRef.current;
		if (!el) return;
		if (moving) {
			el.currentTime = 0;
			el.play().catch(() => {});
		} else el.pause();
	}, [moving]);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => {
			if (!started) setOpenId("opening");
		}, 500);
		return () => clearTimeout(t);
	}, [started]);
	(0, import_react.useEffect)(() => {
		if (!openId) return;
		setVisited((prev) => {
			if (prev.has(openId)) return prev;
			const next = new Set(prev);
			next.add(openId);
			return next;
		});
	}, [openId]);
	const start = (dir) => {
		setFacing(dir);
		setMoving(dir);
		setStarted(true);
	};
	const stop = () => setMoving(null);
	(0, import_react.useEffect)(() => {
		const down = (e) => {
			if (openId) return;
			if (e.key === "ArrowRight") {
				e.preventDefault();
				start("right");
			} else if (e.key === "ArrowLeft") {
				e.preventDefault();
				start("left");
			}
		};
		const up = (e) => {
			if (e.key === "ArrowRight" || e.key === "ArrowLeft") stop();
		};
		window.addEventListener("keydown", down);
		window.addEventListener("keyup", up);
		return () => {
			window.removeEventListener("keydown", down);
			window.removeEventListener("keyup", up);
		};
	}, [openId]);
	const nearest = (0, import_react.useMemo)(() => {
		const characterWorldX = cameraX + characterCenterX;
		let best = null;
		for (const cp of checkpoints) {
			const cpX = cp.xPercent * worldWidth;
			const dist = Math.abs(cpX - characterWorldX);
			if (!best || dist < best.dist) best = {
				cp,
				dist
			};
		}
		return best && best.dist < NEAR_THRESHOLD ? best.cp : null;
	}, [cameraX, characterCenterX]);
	const characterSrc = moving === "left" ? left_default : moving === "right" ? right_default : idle_default;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 overflow-hidden bg-[#8ecae6] select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-emerald-100" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-0 h-full",
				style: {
					width: worldWidth,
					transform: `translate3d(${-cameraX}px,0,0)`,
					willChange: "transform"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: background_default,
					alt: "Wedding garden panorama",
					className: "absolute inset-0 h-full w-full object-cover object-bottom pointer-events-none",
					draggable: false
				}), checkpoints.map((cp) => {
					const x = cp.xPercent * worldWidth;
					const done = visited.has(cp.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-[14%] -translate-x-1/2 flex flex-col items-center",
						style: { left: x },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `mb-1 rounded-full px-2 py-0.5 text-[10px] font-semibold text-white shadow-md ${done ? "opacity-60" : ""}`,
							style: { backgroundColor: cp.color },
							children: cp.index
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							width: "26",
							height: "34",
							viewBox: "0 0 24 32",
							className: "drop-shadow-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M12 0C5.4 0 0 5.4 0 12c0 8.4 12 20 12 20s12-11.6 12-20C24 5.4 18.6 0 12 0z",
									fill: cp.color
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "12",
									cy: "11",
									r: "4.5",
									fill: "#fff"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M12 13.5c-1-1-3-2-3-3.6 0-1 .8-1.9 1.9-1.9.6 0 1 .3 1.1.7.1-.4.5-.7 1.1-.7 1 0 1.9.9 1.9 1.9 0 1.6-2 2.6-3 3.6z",
									fill: cp.color
								})
							]
						})]
					}, cp.id);
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: characterSrc,
				alt: "Couple character",
				className: "absolute bottom-[20%] left-1/2 -translate-x-1/2 pointer-events-none drop-shadow-xl",
				style: {
					height: CHARACTER_HEIGHT,
					imageRendering: "auto"
				},
				draggable: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-3 left-1/2 -translate-x-1/2 flex gap-1.5 rounded-full bg-black/25 px-3 py-1.5 backdrop-blur-sm",
				children: checkpoints.map((cp) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-2 w-2 rounded-full transition",
					style: { backgroundColor: visited.has(cp.id) ? cp.color : "rgba(255,255,255,0.5)" }
				}, cp.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-12 left-1/2 -translate-x-1/2 text-center px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-white/95 text-sm italic drop-shadow",
					children: "Kepada Yth."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-white text-lg font-semibold drop-shadow-md leading-tight",
					children: guestName || "Bapak / Ibu / Saudara / i"
				})]
			}),
			nearest && !openId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => {
					stop();
					setOpenId(nearest.id);
				},
				className: "absolute left-1/2 -translate-x-1/2 animate-bounce rounded-full bg-white/95 px-4 py-2 text-sm font-semibold shadow-lg ring-2",
				style: {
					bottom: `calc(20% + ${CHARACTER_HEIGHT}px + 12px)`,
					color: nearest.color,
					boxShadow: `0 0 0 3px ${nearest.color}55`
				},
				children: ["Buka: ", nearest.title]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controls, {
				onHold: start,
				onRelease: stop,
				facing,
				moving,
				disabled: !!openId
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
				ref: audioRef,
				src: walk_default,
				loop: true,
				preload: "auto"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckpointModal, {
				openId,
				onOpenChange: (o) => {
					if (!o) setOpenId(null);
				},
				children: openId && renderCheckpoint(openId, guestName, () => setOpenId(null))
			})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(World, {});
}
//#endregion
export { Index as component };
