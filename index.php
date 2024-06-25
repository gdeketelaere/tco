<?php get_header(); ?>

<div class="">

	<?php if ( have_posts() ) : ?>
		<?php
		while ( have_posts() ) :
			the_post();
			?>
<?php if ( is_front_page() ) { ?>
				<!-- Start homepage -->
				<div class="w-full">
					<?php get_template_part( 'template-parts/home', get_post_format() ); ?>
				</div>
				<!-- End homepage -->
			<?php } else { ?>
				<!-- Start page -->
				<div class="container mx-auto">
					<?php get_template_part( 'template-parts/content', get_post_format() ); ?>
				</div>
				<!-- End page -->
			<?php } ?>
			

		<?php endwhile; ?>

	<?php endif; ?>

</div>

<?php
get_footer();
