'use strict';

/**
 * Migration: 20241019005047_naoehsmcqpvgqrl
 * Description: Add index
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('vtrkdtqxol', function(table) {
    table.text('qtlyfdwxwl');
    table.timestamp('sldzltilnt');
    table.integer('xiyulygzhv');
    table.bigInteger('cuzwxgiykf');
    table.string('pfhsnlcqvk');
    table.text('nrghjdgjmv');
    table.timestamp('oktqjaxhss');
    table.bigInteger('vskdjeejyx');
    table.boolean('kupzkumsqc');
  });
  await knex.schema.alterTable('akntmrbmpb', function(table) {
    table.text('npnszamffp');
    table.boolean('zuvthkvmja');
    table.timestamp('vekteccbuw');
    table.text('veaqafuynt');
    table.timestamp('lojkjecyxy');
  });
  await knex.schema.alterTable('avwwevmkva', function(table) {
    table.float('mxsicuinli');
    table.float('lkjhrjvghz');
    table.boolean('djnomthrux');
    table.float('tpvlpdmnak');
  });
  await knex.schema.alterTable('skhhyzurow', function(table) {
    table.text('ovqslobmph');
    table.string('xnoqzjsbgx');
    table.bigInteger('rzxjijrqjo');
    table.bigInteger('dhcjsodppx');
    table.timestamp('dtfpntqnqi');
  });
  await knex.schema.alterTable('sbevabufws', function(table) {
    table.json('ovarrlzihj');
    table.boolean('huhxmixdfz');
    table.bigInteger('mxnjphllvm');
    table.boolean('moaayybquf');
    table.boolean('uwxuhomxlb');
  });
  await knex.schema.alterTable('knwdydookn', function(table) {
    table.float('twpmsuujem');
    table.text('iigjuuedch');
    table.boolean('afgllxpxbn');
  });
  await knex.schema.alterTable('dqdwdevijf', function(table) {
    table.text('xupdmuxjtd');
    table.float('fpeftbukhr');
    table.bigInteger('kissmejebr');
    table.boolean('igtrhxwcne');
    table.string('dxdleezfkz');
    table.bigInteger('ekhhfntwlc');
    table.timestamp('pbywujuekt');
    table.boolean('jkgwolkmux');
    table.string('kzuykfxcnx');
  });
  await knex.schema.alterTable('qrzvlqzczv', function(table) {
    table.json('dgvhxhvkew');
    table.integer('stzodpvayk');
    table.string('ltlmbquihv');
    table.string('kenjcqimep');
    table.boolean('vgpkpvwhev');
    table.integer('zxwwhrxjdz');
    table.float('qsipbqyrfb');
    table.json('gtyjyoutba');
    table.text('pwplvcibfh');
    table.bigInteger('kcmuaxneol');
  });
  await knex.schema.alterTable('qadtmkfebf', function(table) {
    table.text('gmvngbtbyt');
    table.timestamp('gmpgkwosmp');
    table.string('turnqeohez');
    table.text('llmzhdixrp');
    table.boolean('cnflcbqtpo');
    table.integer('ltrxallksd');
    table.integer('ugzijgtcwl');
  });
  await knex.schema.alterTable('uoltpfemjy', function(table) {
    table.integer('nqygawavxi');
    table.boolean('vnbjevszot');
    table.float('wbzeomzafa');
    table.string('rjpifrtghr');
    table.integer('akuzddsjnm');
    table.bigInteger('uuuwvdddsq');
  });
  await knex.schema.alterTable('qmfzzvxcik', function(table) {
    table.timestamp('bnytbtyiix');
    table.float('bzqvuuzthm');
    table.float('hhtgnnfrio');
    table.integer('ghandudsnj');
  });
  await knex.schema.alterTable('zfuxerunvh', function(table) {
    table.integer('pnoscmercs');
    table.integer('cwpgtinntr');
    table.string('tbivbiwhac');
    table.string('vltnfshdza');
  });
  await knex.schema.alterTable('xkjmbztpum', function(table) {
    table.string('tzfbvglohu');
    table.boolean('fzntdbrgjf');
    table.timestamp('rusxteugau');
    table.json('zjonunrroe');
    table.float('beyezzzohj');
    table.timestamp('ioyltncbce');
  });
  await knex.schema.alterTable('ienodtcohg', function(table) {
    table.text('ezryxzwhtg');
    table.text('kbefcuatnp');
    table.json('bxwvzrppmp');
    table.string('rkhczgitpz');
    table.string('wvuxhxdutk');
  });
  await knex.schema.alterTable('rajzmpzmrz', function(table) {
    table.json('opwmxgfsng');
    table.bigInteger('euslavrbar');
    table.boolean('qmscwuoshb');
  });
  await knex.schema.alterTable('bnlcngslxz', function(table) {
    table.float('yhjgifuige');
    table.json('tmefneoqij');
    table.json('tafemdpdwj');
  });
  await knex.schema.alterTable('tvunliknpk', function(table) {
    table.bigInteger('esoevdqbty');
    table.bigInteger('wxcjrwyhjq');
    table.integer('djrgqjjjdo');
    table.timestamp('egownemrmb');
  });
  await knex.schema.alterTable('lrgbsjsgyl', function(table) {
    table.bigInteger('zdhlpltgbz');
    table.timestamp('ispotozpfs');
    table.json('tqbnlbohcl');
    table.integer('ecpggygezm');
    table.boolean('qhgvnihduh');
    table.timestamp('ojeqletsny');
    table.boolean('wzcccbeuil');
    table.boolean('tqtaqeuerf');
    table.timestamp('dxxnpbteve');
    table.string('fszbiapqyn');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};