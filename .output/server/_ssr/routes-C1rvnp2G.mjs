import { n as __toESM } from "../_runtime.mjs";
import { n as checkpoints, r as wedding, t as background_default } from "./background-C6KinKP0.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { E as isRedirect, g as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay$1, d as Slot, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-wTZ4OWIr.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { i as stringType, n as numberType, r as objectType, t as enumType } from "../_libs/zod.mjs";
import { a as MapPin, c as ChevronRight, i as Music, l as ChevronLeft, n as Wind, o as Heart, r as Volume2, s as Clock, t as X, u as CalendarDays } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as VisuallyHidden } from "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { t as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C1rvnp2G.js
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
var background_music_default = "/assets/background-music-Dvx76h1b.mp3";
var ambient_default = "/assets/ambient-BOXdXcHc.mp3";
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
	const heroImage = checkpoints.find((cp) => cp.id === "opening")?.image;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center",
		children: [
			heroImage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 overflow-hidden rounded-2xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: heroImage,
					alt: "Wedding Hero",
					className: "h-48 w-full object-cover",
					onError: (e) => {
						e.target.style.display = "none";
					}
				})
			}),
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
	const images = checkpoints.find((cp) => cp.id === "couple")?.images || [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 text-sm text-foreground/90",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-3",
			children: [wedding.groom, wedding.bride].map((name, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-secondary/60 p-3 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto h-20 w-20 overflow-hidden rounded-full",
						children: images[i] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: images[i],
							alt: name,
							className: "h-full w-full object-cover",
							onError: (e) => {
								e.target.style.display = "none";
							}
						})
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
	const images = checkpoints.find((cp) => cp.id === "gallery")?.images || [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-3 text-center text-xs text-muted-foreground italic",
			children: "Momen-momen indah kami"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-3 gap-2",
			children: images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-square overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: `Gallery ${i + 1}`,
					className: "h-full w-full object-cover transition-transform hover:scale-110",
					loading: "lazy",
					onError: (e) => {
						e.target.style.display = "none";
					}
				})
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
var submitRsvp = createServerFn({ method: "POST" }).validator((raw) => rsvpSchema.parse(raw)).handler(createSsrRpc("5415a8fa0484317c21e3436c1fdbfb347ba7508662e13027aa0392709c49ee20"));
var submitWish = createServerFn({ method: "POST" }).validator((raw) => wishSchema.parse(raw)).handler(createSsrRpc("89cfe436f87b720523e97cb824e7e61c6a09351afeb7221eed8a0cea44518759"));
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
var BG_ASPECT = 1920 / 813;
var CHARACTER_HEIGHT = 120;
var NEAR_THRESHOLD = 90;
var WALK_SPEED = 2;
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
	const [playerX, setPlayerX] = (0, import_react.useState)(0);
	const playerRef = (0, import_react.useRef)(0);
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
	const [bgMusicEnabled, setBgMusicEnabled] = (0, import_react.useState)(false);
	const [ambientEnabled, setAmbientEnabled] = (0, import_react.useState)(false);
	const [bgMusicVolume, setBgMusicVolume] = (0, import_react.useState)(.3);
	const [ambientVolume, setAmbientVolume] = (0, import_react.useState)(.2);
	const [showAudioPanel, setShowAudioPanel] = (0, import_react.useState)(false);
	const audioRef = (0, import_react.useRef)(null);
	const bgMusicRef = (0, import_react.useRef)(null);
	const ambientRef = (0, import_react.useRef)(null);
	const worldRef = (0, import_react.useRef)(null);
	const characterRef = (0, import_react.useRef)(null);
	const promptRef = (0, import_react.useRef)(null);
	const visitedRef = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	(0, import_react.useEffect)(() => {
		const params = new URLSearchParams(window.location.search);
		setGuestName(sanitizeGuestName(params.get("to")));
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.classList.add("invitation-lock");
		return () => document.body.classList.remove("invitation-lock");
	}, []);
	(0, import_react.useEffect)(() => {
		let timeoutId;
		const measure = () => {
			clearTimeout(timeoutId);
			timeoutId = window.setTimeout(() => {
				setViewport({
					w: window.innerWidth,
					h: window.innerHeight
				});
			}, 100);
		};
		measure();
		window.addEventListener("resize", measure, { passive: true });
		return () => {
			window.removeEventListener("resize", measure);
			clearTimeout(timeoutId);
		};
	}, []);
	const worldWidth = Math.max(viewport.w, Math.round(viewport.h * BG_ASPECT));
	const calculatedMinCameraX = 0;
	const calculatedMaxCameraX = Math.max(0, worldWidth - viewport.w);
	(0, import_react.useEffect)(() => {
		setMinCameraX(calculatedMinCameraX);
		setMaxCameraX(calculatedMaxCameraX);
	}, [calculatedMinCameraX, calculatedMaxCameraX]);
	(0, import_react.useEffect)(() => {
		if (!initializedRef.current && maxCameraX >= 0) {
			initializedRef.current = true;
			const startX = checkpoints[0].xPercent * worldWidth;
			playerRef.current = startX;
			setPlayerX(startX);
			cameraRef.current = 0;
			setCameraX(0);
		}
	}, [maxCameraX, worldWidth]);
	const clampPlayer = (0, import_react.useCallback)((n) => Math.max(0, Math.min(worldWidth, n)), [worldWidth]);
	const clampCamera = (0, import_react.useCallback)((n) => Math.max(minCameraX, Math.min(maxCameraX, n)), [minCameraX, maxCameraX]);
	(0, import_react.useEffect)(() => {
		if (!moving) return;
		let raf = 0;
		let frameCount = 0;
		const step = () => {
			const delta = moving === "right" ? WALK_SPEED : -2;
			const nextPlayer = clampPlayer(playerRef.current + delta);
			playerRef.current = nextPlayer;
			const targetCamera = nextPlayer - viewport.w / 2;
			const nextCamera = clampCamera(targetCamera);
			cameraRef.current = nextCamera;
			if (worldRef.current && worldRef.current.style.transform !== `translate3d(${-nextCamera}px,0,0)`) worldRef.current.style.transform = `translate3d(${-nextCamera}px,0,0)`;
			if (characterRef.current && characterRef.current.style.left !== `${nextPlayer - nextCamera}px`) characterRef.current.style.left = `${nextPlayer - nextCamera}px`;
			if (promptRef.current && nearestRef.current && promptRef.current.style.left !== `${nextPlayer - nextCamera}px`) promptRef.current.style.left = `${nextPlayer - nextCamera}px`;
			frameCount++;
			if (frameCount % 3 === 0) {
				setPlayerX(nextPlayer);
				setCameraX(nextCamera);
			}
			raf = requestAnimationFrame(step);
		};
		raf = requestAnimationFrame(step);
		return () => cancelAnimationFrame(raf);
	}, [
		moving,
		clampPlayer,
		clampCamera,
		viewport.w
	]);
	(0, import_react.useEffect)(() => {
		const el = audioRef.current;
		if (!el) return;
		if (moving) {
			el.currentTime = 0;
			el.play().catch(() => {});
		} else el.pause();
	}, [moving]);
	(0, import_react.useEffect)(() => {
		const el = bgMusicRef.current;
		if (!el) return;
		el.volume = bgMusicVolume;
		if (bgMusicEnabled) el.play().catch(() => {});
		else el.pause();
	}, [bgMusicEnabled, bgMusicVolume]);
	(0, import_react.useEffect)(() => {
		const el = ambientRef.current;
		if (!el) return;
		el.volume = ambientVolume;
		if (ambientEnabled) el.play().catch(() => {});
		else el.pause();
	}, [ambientEnabled, ambientVolume]);
	(0, import_react.useEffect)(() => {
		if (started) return;
		const startAudio = () => {
			setBgMusicEnabled(true);
			setAmbientEnabled(true);
			setStarted(true);
			window.removeEventListener("click", startAudio);
			window.removeEventListener("keydown", startAudio);
		};
		window.addEventListener("click", startAudio, { once: true });
		window.addEventListener("keydown", startAudio, { once: true });
		return () => {
			window.removeEventListener("click", startAudio);
			window.removeEventListener("keydown", startAudio);
		};
	}, [started]);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => {
			if (!started) setOpenId("opening");
		}, 500);
		return () => clearTimeout(t);
	}, [started]);
	(0, import_react.useEffect)(() => {
		if (!openId) return;
		visitedRef.current = /* @__PURE__ */ new Set([...visitedRef.current, openId]);
		setVisited(visitedRef.current);
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
	const nearestRef = (0, import_react.useRef)(null);
	const [nearest, setNearest] = (0, import_react.useState)(null);
	const calculateNearest = (0, import_react.useCallback)(() => {
		let best = null;
		for (const cp of checkpoints) {
			const cpX = cp.xPercent * worldWidth;
			const dist = Math.abs(cpX - playerRef.current);
			if (!best || dist < best.dist) best = {
				cp,
				dist
			};
		}
		return best && best.dist < NEAR_THRESHOLD ? best.cp : null;
	}, [worldWidth]);
	(0, import_react.useEffect)(() => {
		if (!moving) {
			const nearestCp = calculateNearest();
			nearestRef.current = nearestCp;
			setNearest(nearestCp);
		}
	}, [moving, calculateNearest]);
	const characterSrc = moving === "left" ? left_default : moving === "right" ? right_default : idle_default;
	const checkpointPins = (0, import_react.useMemo)(() => checkpoints.map((cp) => {
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
						d: "M12 0C5.4 0 0 5.4 0 12c0 8.4 12 20 12 20s12-11.6 12-20C24 5.4 0 12 0z",
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
	}), [worldWidth, visited]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 overflow-hidden bg-[#8ecae6] select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-emerald-100" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: worldRef,
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
				}), checkpointPins]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				ref: characterRef,
				src: characterSrc,
				alt: "Couple character",
				className: "absolute bottom-[20%] pointer-events-none drop-shadow-xl",
				style: {
					left: playerX - cameraX,
					height: CHARACTER_HEIGHT,
					imageRendering: "auto",
					transform: "translateX(-50%)"
				},
				draggable: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-3 left-1/2 -translate-x-1/2 flex gap-1.5 rounded-full bg-black/25 px-3 py-1.5 backdrop-blur-sm",
				children: (0, import_react.useMemo)(() => checkpoints.map((cp) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-2 w-2 rounded-full transition",
					style: { backgroundColor: visited.has(cp.id) ? cp.color : "rgba(255,255,255,0.5)" }
				}, cp.id)), [visited])
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
				ref: promptRef,
				onClick: () => {
					stop();
					setOpenId(nearest.id);
				},
				className: "absolute animate-bounce rounded-full bg-white/95 px-4 py-2 text-sm font-semibold shadow-lg ring-2",
				style: {
					left: playerX - cameraX,
					bottom: `calc(20% + ${CHARACTER_HEIGHT}px + 12px)`,
					transform: "translateX(-50%)",
					color: nearest.color,
					boxShadow: `0 0 0 3px ${nearest.color}55`
				},
				children: ["Buka: ", nearest.title]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-20 right-3 z-50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setShowAudioPanel(!showAudioPanel),
					className: `rounded-full p-2.5 shadow-lg backdrop-blur-sm transition-all ${bgMusicEnabled || ambientEnabled ? "bg-indigo-500/90 text-white hover:bg-indigo-600/90" : "bg-white/80 text-gray-600 hover:bg-white"}`,
					title: "Audio Controls",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { size: 20 })
				}), showAudioPanel && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute right-12 top-0 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg w-64",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-bold text-gray-800 mb-3",
							children: "Audio Controls"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-semibold text-gray-700 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { size: 14 }), "Musik Latar"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setBgMusicEnabled(!bgMusicEnabled),
									className: `relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${bgMusicEnabled ? "bg-purple-500" : "bg-gray-300"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${bgMusicEnabled ? "translate-x-5" : "translate-x-1"}` })
								})]
							}), bgMusicEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-xs text-gray-600 block mb-1",
								children: [
									"Volume: ",
									Math.round(bgMusicVolume * 100),
									"%"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: "0",
								max: "1",
								step: "0.1",
								value: bgMusicVolume,
								onChange: (e) => setBgMusicVolume(parseFloat(e.target.value)),
								className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-xs font-semibold text-gray-700 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wind, { size: 14 }), "Suara Alam"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setAmbientEnabled(!ambientEnabled),
								className: `relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${ambientEnabled ? "bg-teal-500" : "bg-gray-300"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${ambientEnabled ? "translate-x-5" : "translate-x-1"}` })
							})]
						}), ambientEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs text-gray-600 block mb-1",
							children: [
								"Volume: ",
								Math.round(ambientVolume * 100),
								"%"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: "0",
							max: "1",
							step: "0.1",
							value: ambientVolume,
							onChange: (e) => setAmbientVolume(parseFloat(e.target.value)),
							className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-500"
						})] })] })
					]
				})]
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
				ref: bgMusicRef,
				src: background_music_default,
				loop: true,
				preload: "auto",
				playsInline: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
				ref: ambientRef,
				src: ambient_default,
				loop: true,
				preload: "auto",
				playsInline: true
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
function LoadingScreen({ onComplete }) {
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const assets = [
			{
				name: "Taman",
				src: "/background.webp",
				type: "image"
			},
			{
				name: "Musik Latar",
				src: "/background-music.mp3",
				type: "audio"
			},
			{
				name: "Suara Alam",
				src: "/ambient.mp3",
				type: "audio"
			},
			{
				name: "Efek Jalan",
				src: "/walk.mp3",
				type: "audio"
			},
			{
				name: "Animasi Idle",
				src: "/idle.gif",
				type: "image"
			},
			{
				name: "Animasi Kiri",
				src: "/left.gif",
				type: "image"
			},
			{
				name: "Animasi Kanan",
				src: "/right.gif",
				type: "image"
			}
		];
		let loaded = 0;
		const total = assets.length;
		const loadAsset = (asset) => {
			return new Promise((resolve) => {
				if (asset.type === "image") {
					const img = new Image();
					img.onload = () => {
						loaded++;
						setProgress(Math.round(loaded / total * 100));
						resolve();
					};
					img.onerror = () => {
						loaded++;
						setProgress(Math.round(loaded / total * 100));
						resolve();
					};
					img.src = asset.src;
				} else if (asset.type === "audio") {
					const audio = new Audio();
					audio.oncanplaythrough = () => {
						loaded++;
						setProgress(Math.round(loaded / total * 100));
						resolve();
					};
					audio.onerror = () => {
						loaded++;
						setProgress(Math.round(loaded / total * 100));
						resolve();
					};
					audio.src = asset.src;
					audio.load();
				}
			});
		};
		const loadAllAssets = async () => {
			for (const asset of assets) {
				await loadAsset(asset);
				await new Promise((resolve) => setTimeout(resolve, 100));
			}
			setTimeout(() => {
				onComplete();
			}, 400);
		};
		loadAllAssets();
	}, [onComplete]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "w-16 h-16 mx-auto text-gray-800",
						fill: "currentColor",
						viewBox: "0 0 24 24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-light text-gray-800 mb-8 tracking-wide",
					children: "Undangan Pernikahan"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-64 h-px bg-gray-200 mx-auto mb-4 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full bg-gray-800 transition-all duration-300",
						style: { width: `${progress}%` }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-gray-500 font-light",
					children: [progress, "%"]
				})
			]
		})
	});
}
function Index() {
	const [isLoading, setIsLoading] = (0, import_react.useState)(true);
	const handleLoadingComplete = () => {
		setIsLoading(false);
	};
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, { onComplete: handleLoadingComplete });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(World, {});
}
//#endregion
export { Index as component };
