'use strict';

/**
 * Migration: 20240301235157_jwyxfjanbeshdoc
 * Description: Remove column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('iqclhlqumi', function(table) {
    table.timestamp('mpfitodewj');
    table.json('ulpcmimjtz');
    table.string('djwiitdenf');
    table.boolean('wysotdktzp');
    table.float('ltmdbflbsb');
    table.bigInteger('hatghvhbzq');
    table.json('jwqcqttqrc');
    table.json('puodcrcjqi');
    table.json('qzpfxpprhq');
  });
  await knex.schema.alterTable('kspjopkndi', function(table) {
    table.boolean('haxulnsspu');
    table.bigInteger('anctwzamoj');
    table.timestamp('nivkeavmrm');
    table.string('jogdgceapf');
  });
  await knex.schema.alterTable('fmgngvssla', function(table) {
    table.float('uthfuwqhdt');
    table.float('avkpismwpy');
    table.boolean('mpfzmonvzd');
    table.json('kfygprcqfj');
    table.string('nzcunwusop');
    table.json('tjjxgyttti');
    table.bigInteger('kvnurubqov');
    table.json('embdopefqy');
    table.float('yhsmylnxiz');
  });
  await knex.schema.alterTable('siyndcumhd', function(table) {
    table.timestamp('ppnyltvwor');
    table.float('rvwqruuqhv');
    table.float('pvuzdndhny');
    table.timestamp('zperrlzlal');
    table.json('vsahhiywad');
  });
  await knex.schema.alterTable('nvtkllolow', function(table) {
    table.integer('lfqiugtrcb');
    table.timestamp('nmfbvovibl');
    table.boolean('inlwcqwbqn');
    table.float('thccptgwpb');
    table.json('hgvuvirwti');
    table.json('xeingrxrjn');
    table.timestamp('rzioiepwwx');
  });
  await knex.schema.alterTable('rizszluqur', function(table) {
    table.string('kcqxfwcjjd');
    table.float('koctkojefs');
    table.timestamp('gopwfsecks');
    table.bigInteger('egjinfmmlg');
    table.bigInteger('swhpqcssks');
    table.text('lvhecdlxqi');
    table.boolean('oahuaounqz');
    table.text('yzxtnluitn');
    table.integer('ylntmrjxjm');
    table.text('gbawzadduv');
  });
  await knex.schema.alterTable('okxtrzhkio', function(table) {
    table.text('swwytoqdpr');
    table.text('crpnbcgklc');
    table.integer('utatnrknvk');
  });
  await knex.schema.alterTable('cskukznmds', function(table) {
    table.boolean('iknnijyobe');
    table.json('ubdtptbxio');
    table.timestamp('jmmeeyzwar');
  });
  await knex.schema.alterTable('akcswvqfng', function(table) {
    table.timestamp('hsfxodlokz');
    table.boolean('fhulmdhirk');
    table.json('irwgezsxnm');
    table.text('fuchshatfx');
    table.json('xsfguuxnpn');
    table.bigInteger('rkkdvwfnjv');
    table.bigInteger('krdytqvwxi');
  });
  await knex.schema.alterTable('orknfvzygq', function(table) {
    table.bigInteger('ifjuwzrmla');
    table.integer('bompgrjbsl');
    table.bigInteger('bwzryspbzj');
    table.boolean('favsssnvnl');
    table.float('glrgxinlif');
    table.float('tppggaykyc');
    table.integer('aqqwdkvqba');
    table.string('oytiwcrwav');
    table.text('worakgtkep');
    table.text('qejixjvrbk');
  });
  await knex.schema.alterTable('ttsgkdaqzg', function(table) {
    table.json('dyslglxvim');
    table.bigInteger('qsgnbxizhw');
    table.integer('mcnrwfowcv');
    table.float('kljejtlinm');
  });
  await knex.schema.alterTable('ahpqxiaffc', function(table) {
    table.timestamp('cqwywgnffa');
    table.text('lxgpnqppzm');
    table.string('ytllmplcpt');
    table.boolean('bbkemoeuhf');
    table.boolean('zvzuspecca');
    table.json('vjqnpfeynl');
    table.bigInteger('zhaueltmhc');
  });
  await knex.schema.alterTable('vpjvguvvqa', function(table) {
    table.boolean('tslmujeoll');
    table.json('fcyoscrmke');
    table.float('lozmqefjos');
    table.boolean('pcokitclni');
  });
  await knex.schema.alterTable('bzpxdtmkks', function(table) {
    table.text('fwcalbmjmk');
    table.float('lwkjczswig');
    table.timestamp('mhrhunwkub');
    table.timestamp('rfvzgnszvc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};