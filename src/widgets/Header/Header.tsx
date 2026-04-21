import s from './Header.module.scss';

export function Header() {
	return (
		<header className={s.header}>
			<div className={s.topbar}>
				<div className={s.container}>
					<div className={s.topbarInner}>
						<div className={s.topbarInfo}>
							<span>Киев</span>
							<span>Доставка 45 – 60 мин</span>
							<span>Бесплатно от 500 грн</span>
						</div>

						<div>
							<button
								className={s.iconButton}
								type="button"
								aria-label="Сменить язык"
							>
								UA
							</button>
							<button
								className={s.iconButton}
								type="button"
								aria-label="Переключить тему"
							>
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="M12 3V5.5M12 18.5V21M3 12H5.5M18.5 12H21M5.64 5.64L7.4 7.4M16.6 16.6L18.36 18.36M18.36 5.64L16.6 7.4M7.4 16.6L5.64 18.36M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z" />
								</svg>
							</button>
							<a className={s.phone} href="tel:+380991234567">
								+38 099 123 45 67
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className={s.mainHeader}>
				<div className={s.container}>
					<div className={s.headerInner}>
						<a className={s.logo} href="/" aria-label="Yami Sushi home">
							<span className={s.logoAccent}>Yami</span> Sushi
						</a>

						<nav className={s.nav} aria-label="Основная навигация">
							<a className={s.navLink} href="#menu">
								Меню
							</a>
							<a className={s.navLink} href="#promo">
								Акции
							</a>
							<a className={s.navLink} href="#contacts">
								Контакты
							</a>
						</nav>

						<div className={s.actions}>
							<button className={s.iconButton} type="button" aria-label="Поиск">
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="M10.5 18a7.5 7.5 0 1 1 5.3-2.2L21 21" />
								</svg>
							</button>

							<button
								className={s.iconButton}
								type="button"
								aria-label="Избранное"
							>
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="M12 20.5s-7-4.35-7-10a4 4 0 0 1 7-2.55A4 4 0 0 1 19 10.5c0 5.65-7 10-7 10Z" />
								</svg>
							</button>

							<button
								className={s.iconButton}
								type="button"
								aria-label="Аккаунт"
							>
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="M12 12a4 4 0 1 0-4-4a4 4 0 0 0 4 4Zm-7 8a7 7 0 0 1 14 0" />
								</svg>
							</button>

							<button
								className={s.cartButton}
								type="button"
								aria-label="Корзина"
							>
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="M3 4h2l2.2 9.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.76L20 7H7" />
									<path d="M10 19a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
								</svg>

								<span className={s.cartText}>Корзина</span>
								<span className={s.cartCount}>2</span>
							</button>

							<button
								className={s.burgerButton}
								type="button"
								aria-label="Открыть меню"
							>
								<span></span>
								<span></span>
								<span></span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
