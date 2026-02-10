// Jetpack Compose Breadcrumb Component
export const composeBreadcrumbCode = `@Composable
fun Breadcrumb(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        modifier = modifier
    )
}`;

export const composeBreadcrumbProps = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
