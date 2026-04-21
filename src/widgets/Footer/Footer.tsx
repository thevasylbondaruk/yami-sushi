import s from './Footer.module.scss';

export function Footer() {
	return (
		<footer className={s.footer}>
			<div className={s.container}>
				<div className={s.footerTop}>
					<div className={s.footerBrand}>
						<h2 className={s.footerLogo}>
							<span>Yami</span>Sushi
						</h2>
						<p className={s.footerText}>
							Доставка суши и роллов по Киеву. Свежие ингредиенты, быстрый
							заказ, удобная доставка домой и в офис.
						</p>
					</div>

					<div className={s.footerCol}>
						<h3 className={s.footerTitle}>Навигация</h3>
						<ul className={s.footerList}>
							<li>
								<a href="/menu">Меню</a>
							</li>
							<li>
								<a href="/sale">Акции</a>
							</li>
							<li>
								<a href="/contacts">Контакты</a>
							</li>
						</ul>
					</div>

					<div className={s.footerCol}>
						<h3 className={s.footerTitle}>Доставка и оплата</h3>
						<ul className={s.footerList}>
							<li>Доставка 45–60 мин</li>
							<li>Бесплатно от 500 грн</li>
							<li>Оплата картой или наличными</li>
						</ul>
					</div>

					<div className={s.footerCol}>
						<h3 className={s.footerTitle}>Контакты</h3>
						<ul className={s.footerList}>
							<li>
								<a href="tel:+380991234567">+38 099 123 45 67</a>
							</li>
							<li>Киев</li>
							<li>Ежедневно: 10:00–22:00</li>
						</ul>
					</div>
				</div>

				<div className={s.footerBottom}>
					<p>© 2026 YamiSushi. Все права защищены.</p>

					<div className={s.footerLinks}>
						<a href="/privacy">Политика конфиденциальности</a>
						<a href="/offer">Публичная оферта</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
