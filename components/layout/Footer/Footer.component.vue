<template>
	<footer id="footer" class="footer">
		<div class="footer__backgrounds">
			<img
				v-for="(image, idx) in backgroundImage"
				:key="idx"
				class="footer__background"
				:src="image.image"
			/>
			<div class="footer__background"></div>
		</div>
		<div class="row center small-full xlarge-three-quarter">
			<div class="column">
				<nav class="nav">
					<div class="row small-half medium-fifth">
						<div
							v-for="(group, idg) in NavigationData"
							:key="idg"
							class="column"
						>
							<h6 v-if="group.link">
								<NuxtLink :to="group.link">{{ group.title }}</NuxtLink>
							</h6>
							<h6 v-else>{{ group.title }}</h6>
							<ul class="nav__list">
								<li
									v-for="(item, idi) in group.children"
									:key="idi"
									class="nav__item"
									:class="{ 'nav__item--inactive': !item.active }"
									@mouseover="addImage(item)"
								>
									<NuxtLink v-if="item.link" class="nav__link" :to="item.link">
										<span class="nav__text">{{ item.name }}</span>
									</NuxtLink>
									<a
										v-if="item.url"
										class="nav__link nav__link--external"
										:href="item.link"
										><span class="nav__text">{{ item.name }}</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	</footer>
</template>

<script src="./Footer.script.js" />

<style lang="scss" src="./Footer.style.scss" />
