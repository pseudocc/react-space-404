import gsap from 'gsap';
import React, { useEffect, createRef, useState } from 'react';
import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material';

import './404.css';
import Astronaut from './assets/astronaut';
import Comet from './assets/comet';
import Stars from './assets/stars';
import Star from './assets/star';
import BlackHole from './assets/black-hole';
import i18n_d, { language_d } from './i18n';
import { useTranslation } from 'react-i18next';

import {
  astronaut_shape,
  blackhole_shape,
  comets_shapes,
  stars_shapes,
  star_shapes,
  palette_d
} from './404.shape';

function Space404({
  palette = palette_d,
  countdown = 30,
  href = '/',
  i18n = i18n_d,
  language = language_d
}) {
  const [cd, set_cd] = useState(countdown);
  const [t, i18n_t] = useTranslation(null, { i18n, keyPrefix: '404' });

  Object.assign(palette, palette_d);

  const all_shapes = [
    astronaut_shape,
    blackhole_shape,
    ...comets_shapes,
    ...stars_shapes,
    ...star_shapes
  ];

  for (const option of all_shapes) {
    option.ref = createRef();
    if (option.to.dx != null) {
      option.to.x = (option.from.x || 0) + option.to.dx;
      delete option.to.dx;
    }
    if (option.to.dy != null) {
      option.to.y = (option.from.y || 0) + option.to.dy;
      delete option.to.dy;
    }
  }

  useEffect(
    () => {
      if (i18n_t.language != language)
        i18n_t.changeLanguage(language);
    },
    [language]
  );

  // only start the animation once
  useEffect(
    () => {
      for (const option of all_shapes) {
        gsap.fromTo(option.ref.current, option.from, option.to);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(
    () => {
      const tid = setTimeout(() => {
        if (cd > 0)
          set_cd(cd - 1);
        else if (process.env.NODE_ENV != 'development') {
          window.location.href = href;
        }
        else {
          set_cd(countdown);
        }
      }, 1e3);
      return () => clearTimeout(tid);
    },
    [cd]
  );

  return (
    <main id="page404" className="page">
      <Grid container direction="row" justifyContent="center" alignItems="center" mt={2}>
        <Grid item xs={0} md={1} />
        <Grid item xs={12} md={3}>
          <Box id="outer-space">
            <Astronaut props={{ ref: astronaut_shape.ref, className: "astronaut" }} />
            <BlackHole props={{ ref: blackhole_shape.ref, className: "blackhole" }} />
            {comets_shapes.map((o, i) =>
              <Comet key={`comet-${i}`} props={{ ref: o.ref, className: "comet" }}
                fill={o.fill} stroke={o.stroke} />)}
            {stars_shapes.map((o, i) =>
              <Stars key={`stars-${i}`} props={{ ref: o.ref, className: "star" }}
                fill={o.fill} stroke={o.stroke} />)}
            {star_shapes.map((o, i) =>
              <Star key={`star-${i}`} props={{ ref: o.ref, className: "star" }}
                fill={o.fill} stroke={o.stroke} kind={o.kind} />)}
          </Box>
        </Grid>
        <Grid item xs={0} md={2} />
        <Grid id="message-404" item xs={12} md={6} mb={1}>
          <Container maxWidth="sm">
            <Box p={1}>
              <Typography variant="h1" gutterBottom>
                {t("code")}
              </Typography>
              <Typography variant="h4" gutterBottom>
                {t("lost")}
              </Typography>
              <Typography variant="outline" gutterBottom>
                {t("info")}
              </Typography>
            </Box>
            <Box p={1} mt={3}>
              <Divider />
              <br />
              <Stack direction="row" spacing={2} alignItems="center">
                <Button variant="outlined" href={href} size="large" color="error">
                  {t("href")}
                </Button>
                <Typography variant="body2">
                  {t("oxygen", { cd })}
                </Typography>
              </Stack>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </main>
  );
}

export default Space404;